import {combineLatest as observableCombineLatest,  Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkSpace } from '../../classes/workspace';
import { SearchService, UserService, ISort, FrameworkService, PermissionService, ContentService } from '@sunbird/core';
import {
  ServerResponse, PaginationService, ConfigService, ToasterService,
  ResourceService, ILoaderMessage, INoResultMessage, IContents,
} from '@sunbird/shared';
import { Ibatch, IStatusOption } from './../../interfaces/';
import { WorkSpaceService } from '../../services';
import { IPagination } from '@sunbird/announcement';
import * as _ from 'lodash';
import { IImpressionEventInput } from '@sunbird/telemetry';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';
import { ICard } from '../../../shared/interfaces/card';
import {BadgesService} from '../../../core/services/badges/badges.service';


@Component({
  selector: 'app-myassest-page',
  templateUrl: './myassest-page.component.html',
  styleUrls: ['./myassest-page.component.scss']
})
export class MyassestPageComponent  extends WorkSpace implements OnInit  {
  @ViewChild('modalTemplate')
  // @ViewChild('modalTemplate2')
  public modalTemplate: ModalTemplate<{ data: string }, string, string>;
  // public modalTemplate2: ModalTemplate<{data: string}, string, string>;
  /**
     * state for content editior
    */
  state: string;

  /**
   * To navigate to other pages
   */
  route: Router;

  /**
   * To send activatedRoute.snapshot to router navigation
   * service for redirection to draft  component
  */
  private activatedRoute: ActivatedRoute;

  /**
   * Contains unique contentIds id
  */
  contentIds: string;
  /**
   * Contains list of published course(s) of logged-in user
  */
  // allContent: Array<IContents> = [];
  allContent: Array<ICard> = [];

  /**
   * To show / hide loader
  */
  showLoader = true;

  /**
   * loader message
  */
  loaderMessage: ILoaderMessage;

  /**
   * To show / hide no result message when no result found
  */
  noResult = false;

  /**
   * lock popup data for locked contents
  */
  lockPopupData: object;

  /**
   * To show content locked modal
  */
  showLockedContentModal = false;

  /**
   * To show / hide error
  */
  showError = false;

  /**
   * no result  message
  */
  noResultMessage: INoResultMessage;

  /**
    * For showing pagination on draft list
  */
  private paginationService: PaginationService;

  /**
  * To get url, app configs
  */
  public config: ConfigService;
  /**
  * Contains page limit of inbox list
  */
  pageLimit: number;
  /**
  * Current page number of inbox list
  */
  pageNumber = 1;

  /**
  * totalCount of the list
  */
  totalCount: Number;
  /**
    status for preselection;
  */
  status: string;
  /**
  route query param;
  */
  queryParams: any;
  /**
  redirectUrl;
  */
  public redirectUrl: string;
  /**
  filterType;
  */
  public filterType: string;
  /**
  sortingOptions ;
  */
  public sortingOptions: Array<ISort>;
  /**
  sortingOptions ;
  */
  sortByOption: string;
  /**
  sort for filter;
  */
  sort: object;
  /**
	 * inviewLogs
	*/
  inviewLogs = [];
  /**
* value typed
*/
  query: string;
  /**
  * Contains returned object of the pagination service
  * which is needed to show the pagination on all content view
  */
  pager: IPagination;

  /**
  * To show toaster(error, success etc) after any API calls
  */
  private toasterService: ToasterService;
  /**
	 * telemetryImpression
	*/
  telemetryImpression: IImpressionEventInput;
  /**
  * To call resource service which helps to use language constant
  */
 badgeService: BadgesService;
  public frameworkService: FrameworkService;
  public resourceService: ResourceService;
  public permissionService: PermissionService;
  public contentService: ContentService;
  lessonRole: any;
  userId: string;
  reasons = [];
   deleteAsset = false;
   publishAsset = false;
  badgeList: any;

  /**
    * Constructor to create injected service(s) object
    Default method of Draft Component class
    * @param {SearchService} SearchService Reference of SearchService
    * @param {UserService} UserService Reference of UserService
    * @param {Router} route Reference of Router
    * @param {PaginationService} paginationService Reference of PaginationService
    * @param {ActivatedRoute} activatedRoute Reference of ActivatedRoute
    * @param {ConfigService} config Reference of ConfigService
  */
  constructor(public searchService: SearchService,
    public workSpaceService: WorkSpaceService,
    badgeService: BadgesService,
    paginationService: PaginationService,
    activatedRoute: ActivatedRoute,
    route: Router, userService: UserService,
    permissionService: PermissionService,
    toasterService: ToasterService, resourceService: ResourceService,
    config: ConfigService, public modalService: SuiModalService,
    public modalServices: SuiModalService , frameworkService: FrameworkService,
    contentService: ContentService) {
    super(searchService, workSpaceService, userService);
    this.paginationService = paginationService;
    this.route = route;
    this.activatedRoute = activatedRoute;
    this.toasterService = toasterService;
    this.resourceService = resourceService;
    this.config = config;
    this.permissionService = permissionService;
    this.badgeService = badgeService;

    this.frameworkService = frameworkService;
    this.contentService = contentService;

    this.state = 'allcontent';
    this.loaderMessage = {
      'loaderMessage': this.resourceService.messages.stmsg.m0110,
    };
    this.sortingOptions = this.config.dropDownConfig.FILTER.RESOURCES.sortingOptions;
  }

  ngOnInit() {
  //   this.userService.userData$.subscribe(userdata => {
  //   if (userdata && !userdata.err) {
  //     this.userId = userdata.userProfile.userId;

  //   }
  // });
  this.userId = this.userService.userid;
    this.lessonRole = this.config.rolesConfig.workSpaceRole.lessonRole;

    this.filterType = this.config.appConfig.allmycontent.filterType;
    this.redirectUrl = this.config.appConfig.allmycontent.inPageredirectUrl;
    this.frameworkService.initialize();

    observableCombineLatest(
      this.activatedRoute.params,
      this.activatedRoute.queryParams,
      (params: any, queryParams: any) => {
        return {
          params: params,
          queryParams: queryParams
        };
      })
      .subscribe(bothParams => {
        if (bothParams.params.pageNumber) {
          this.pageNumber = Number(bothParams.params.pageNumber);
        }
        this.queryParams = bothParams.queryParams;
        this.query = this.queryParams['query'];
        this.fecthAllContent(this.config.appConfig.WORKSPACE.PAGE_LIMIT, this.pageNumber, bothParams);
      });

    const request = {
      request: {
        filters: {
          issuerList: [],
          rootOrgId: '0127121193133670400',
          roles: ['TEACHER_BADGE_ISSUER'],
          type: 'content'}}};
      this.badgeService.getAllBadgeList(request).subscribe( (data) => {
console.log('data for badge', data);
this.badgeList = data.result.content;
});
  }
  /**
  * This method sets the make an api call to get all UpForReviewContent with page No and offset
  */
  fecthAllContent(limit: number, pageNumber: number, bothParams) {

    this.showLoader = true;
    if (bothParams.queryParams.sort_by) {
      const sort_by = bothParams.queryParams.sort_by;
      const sortType = bothParams.queryParams.sortType;
      this.sort = {
        [sort_by]: _.toString(sortType)
      };
    } else {
      this.sort = { lastUpdatedOn: this.config.appConfig.WORKSPACE.lastUpdatedOn };
    }
    const preStatus = ['Draft', 'FlagDraft', 'Review', 'Processing', 'Live', 'Unlisted', 'FlagReview'];
    const searchParams = {
      filters: {
        status: bothParams.queryParams.status ? bothParams.queryParams.status : preStatus,
        createdBy: this.userService.userid,
        contentType: this.config.appConfig.WORKSPACE.contentType,
        objectType: this.config.appConfig.WORKSPACE.objectType,
        board: bothParams.queryParams.board,
        subject: bothParams.queryParams.subject,
        medium: bothParams.queryParams.medium,
        gradeLevel: bothParams.queryParams.gradeLevel,
        resourceType: bothParams.queryParams.resourceType,
        keywords: bothParams.queryParams.keywords,
        topic: bothParams.queryParams.topic
      },
      limit: limit,
      offset: (pageNumber - 1) * (limit),
      query: _.toString(bothParams.queryParams.query),
      sort_by: this.sort
    };
    this.searchContentWithLockStatus(searchParams).subscribe(
      (data: ServerResponse) => {
        console.log('data', data);
        if (data.result.count && data.result.content.length > 0) {
          this.allContent = data.result.content;
          this.totalCount = data.result.count;
          this.pager = this.paginationService.getPager(data.result.count, pageNumber, limit);
          this.showLoader = false;
          this.noResult = false;
        } else {
          this.showError = false;
          this.noResult = true;
          this.showLoader = false;
          this.noResultMessage = {
            'messageText': this.resourceService.messages.stmsg.m0125
          };
        }
      },
      (err: ServerResponse) => {
        this.showLoader = false;
        this.noResult = false;
        this.showError = true;
        this.toasterService.error(this.resourceService.messages.fmsg.m0081);
      }
    );
  }
  public deleteConfirmModal(contentIds) {
   this.deleteAsset = true;
    const config = new TemplateModalConfig<{ data: string }, string, string>(this.modalTemplate);
    config.isClosable = true;
    config.size = 'mini';
    this.modalService
      .open(config)
      .onApprove(result => {
        this.deleteAsset = false;
        this.showLoader = true;
        this.loaderMessage = {
          'loaderMessage': this.resourceService.messages.stmsg.m0034,
        };
        this.delete(contentIds).subscribe(
          (data: ServerResponse) => {
            this.showLoader = false;
            this.allContent = this.removeAllMyContent(this.allContent, contentIds);
            if (this.allContent.length === 0) {
              this.ngOnInit();
            }
            this.toasterService.success('Asset deleted successfully');
          },
          (err: ServerResponse) => {
            this.showLoader = false;
            this.toasterService.error('Deletion failed Please try again later');
          }
        );
      })
      .onDeny(result => {
      });
  }
  public publishConfirmModal(contentIds) {
    this.deleteAsset = false;
    const config = new TemplateModalConfig<{ data: string }, string, string>(this.modalTemplate);
    config.isClosable = true;
    config.size = 'mini';
    this.modalService
      .open(config)
      .onApprove(result => {
        this.showLoader = true;
        this.loaderMessage = {
          'loaderMessage': this.resourceService.messages.stmsg.m0034,
        };

        // this.delete(contentIds).subscribe(
        //   (data: ServerResponse) => {
        //     this.showLoader = false;
        //     this.allContent = this.removeAllMyContent(this.allContent, contentIds);
        //     if (this.allContent.length === 0) {
        //       this.ngOnInit();
        //     }
        //     this.toasterService.success(this.resourceService.messages.smsg.m0006);
        //   },
        //   (err: ServerResponse) => {
        //     this.showLoader = false;
        //     this.toasterService.error(this.resourceService.messages.fmsg.m0022);
        //   }
        // );
        this.reasons = ['Content plays correctly',
        'Can see the content clearly on Desktop and App',
        'No Hate speech, Abuse, Violence, Profanity',
        'No Sexual content, Nudity or Vulgarity',
        'Relevant Keywords',
        'Appropriate tags such as Resource Type, Concepts',
        'Correct Board, Grade, Subject, Medium',
        'Appropriate Title, Description',
        'No Discrimination or Defamation',
        'Is suitable for children',
        'Audio (if any) is clear and easy to understand',
        'No Spelling mistakes in the text',
        'Language is simple to understand'];
          const requestBody = {
            request: {
              content: {
                publishChecklist: this.reasons,
                lastPublishedBy: this.userId
              }
            }
          };
          const option = {
            url: `${this.config.urlConFig.URLS.CONTENT.PUBLISH}/${contentIds}`,
            data: requestBody
          };
          this.contentService.post(option).subscribe(
            (data: ServerResponse) => {
              this.showLoader = false;

            this.toasterService.success('Asset published successfully');

          }, (err) => {
            this.showLoader = false;
            this.toasterService.error('Asset publishing failed please try later');
          });
      })

      .onDeny(result => {
      });
  }

  /**
   * This method helps to navigate to different pages.
   * If page number is less than 1 or page number is greater than total number
   * of pages is less which is not possible, then it returns.
	 *
	 * @param {number} page Variable to know which page has been clicked
	 *
	 * @example navigateToPage(1)
	 */
  navigateToPage(page: number): undefined | void {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pageNumber = page;
    this.route.navigate(['myassets', this.pageNumber], { queryParams: this.queryParams });
  }
  navigateToDetailsPage(contentId: string) {
    this.route.navigate(['myassets/detail', contentId]);
  }

  contentClick(content) {
    if (_.size(content.lockInfo)) {
        this.lockPopupData = content;
        this.showLockedContentModal = true;
    } else {
      const status = content.status.toLowerCase();
      if (status === 'processing') {
        return;
      }
      if (status === 'draft') { // only draft state contents need to be locked
        this.workSpaceService.navigateToContent(content, this.state);
      } else {
        this.workSpaceService.navigateToContent(content, this.state);
      }
    }
  }

  public onCloseLockInfoPopup () {
    this.showLockedContentModal = false;
  }

  inview(event) {
    _.forEach(event.inview, (inview, key) => {
      const obj = _.find(this.inviewLogs, (o) => {
        return o.objid === inview.data.identifier;
      });
      if (obj === undefined) {
        this.inviewLogs.push({
          objid: inview.data.identifier,
          objtype: inview.data.contentType,
          index: inview.id
        });
      }
    });
    this.telemetryImpression.edata.visits = this.inviewLogs;
    this.telemetryImpression.edata.subtype = 'pageexit';
    this.telemetryImpression = Object.assign({}, this.telemetryImpression);
  }
  removeAllMyContent(contentList, requestData) {
    return contentList.filter((content) => {
      return requestData.indexOf(content.identifier) === -1;
    });
  }

}