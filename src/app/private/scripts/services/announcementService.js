'use strict'

angular.module('playerApp')
  .service('announcementService', ['httpServiceJava', 'config', function (httpServiceJava, config) {
    /**
     * @class announcementService
     * @desc Service to manage announcement.
     * @memberOf Services
     */

    /**
     * @method getOutBoxAnnouncementList
     * @desc Get announcement outbox list data
     * @memberOf Services.announcementService
     * @param {Object}   req - Request Object
     * @param {string}  datasetType - Data type
     * @returns {Promise} Promise object represents announcement outbox list dashboard data
     * @instance
     */
    this.getOutBoxAnnouncementList = function () {
      // return httpServiceJava.get(config.URL.DASHBOARD.ORG_CREATION + '/' + req.org_id + '?period=' + req.period);

      return {'id': 'api.plugin.announcement.user.outbox', 'ver': '1.0', 'ts': '2017-10-2417:30:23:540+0530', 'params': {'resmsgid': 'ea764b40-b8b2-11e7-ba5b-1991e583a6a8', 'msgid': null, 'status': 'successful', 'err': '', 'errmsg': ''}, 'responseCode': 'OK', 'result': {'announcements': [{'announcementId': '1', 'sourceId': 'National Council For Teacher Education', 'createdBy': 'Creator1', 'createdOn': '2017-10-24', 'readBy': ['1234-12341-12313-132123', '1234-12341-12313-324234'], 'type': 'Circular', 'links': ['https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=D8r2WbjkOsKL8Qe4pJeACA', 'https://diksha.gov.in/#documents'], 'title': 'Exam dates announced for CBSE and state board exams', 'description': 'Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams', 'target': ['teachers'], 'attachments': [{'title': 'Circular A1.pdf', 'downloadURL': 'https://linktoattachment.com/documents/Circular A1.pdf', 'mimetype': 'application/pdf'}]}, {'announcementId': '1', 'sourceId': 'National Council For Teacher Education', 'createdBy': 'Creator1', 'createdOn': '2017-10-24', 'readBy': ['1234-12341-12313-132123', '1234-12341-12313-324234'], 'type': 'Circular', 'links': ['https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=D8r2WbjkOsKL8Qe4pJeACA', 'https://diksha.gov.in/#documents'], 'title': 'Exam dates announced for CBSE and state board exams', 'description': 'Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams', 'target': ['teachers'], 'attachments': [{'title': 'Circular A1.pdf', 'downloadURL': 'https://linktoattachment.com/documents/Circular A1.pdf', 'mimetype': 'application/pdf'}]}, {'announcementId': '1', 'sourceId': 'National Council For Teacher Education', 'createdBy': 'Creator1', 'createdOn': '2017-10-24', 'readBy': ['1234-12341-12313-132123', '1234-12341-12313-324234'], 'type': 'Circular', 'links': ['https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=D8r2WbjkOsKL8Qe4pJeACA', 'https://diksha.gov.in/#documents'], 'title': 'Exam dates announced for CBSE and state board exams', 'description': 'Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams', 'target': ['teachers'], 'attachments': [{'title': 'Circular A1.pdf', 'downloadURL': 'https://linktoattachment.com/documents/Circular A1.pdf', 'mimetype': 'application/pdf'}]}, {'announcementId': '1', 'sourceId': 'National Council For Teacher Education', 'createdBy': 'Creator1', 'createdOn': '2017-10-24', 'readBy': ['1234-12341-12313-132123', '1234-12341-12313-324234'], 'type': 'Circular', 'links': ['https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=D8r2WbjkOsKL8Qe4pJeACA', 'https://diksha.gov.in/#documents'], 'title': 'Exam dates announced for CBSE and state board exams', 'description': 'Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams', 'target': ['teachers'], 'attachments': [{'title': 'Circular A1.pdf', 'downloadURL': 'https://linktoattachment.com/documents/Circular A1.pdf', 'mimetype': 'application/pdf'}]}]}}
    }

    /**
     * @method getInboxAnnouncementList
     * @desc Get announcement inbox list data
     * @memberOf Services.announcementService
     * @param {Object}   req - Request Object
     * @param {string}  datasetType - Data type
     * @returns {Promise} Promise object represents announcement inbox list dashboard data
     * @instance
     */
    this.getInboxAnnouncementList = function () {
      // return httpServiceJava.get(config.URL.DASHBOARD.ORG_CREATION + '/' + req.org_id + '?period=' + req.period);

      return {'id': 'api.plugin.announcement.user.outbox', 'ver': '1.0', 'ts': '2017-10-2417:30:23:540+0530', 'params': {'resmsgid': 'ea764b40-b8b2-11e7-ba5b-1991e583a6a8', 'msgid': null, 'status': 'successful', 'err': '', 'errmsg': ''}, 'responseCode': 'OK', 'result': {'announcements': [{'announcementId': '1', 'sourceId': 'National Council For Teacher Education', 'createdBy': 'Creator1', 'createdOn': '2017-10-24', 'readBy': ['1234-12341-12313-132123', '1234-12341-12313-324234'], 'type': 'Circular', 'links': ['https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=D8r2WbjkOsKL8Qe4pJeACA', 'https://diksha.gov.in/#documents'], 'title': 'Exam dates announced for CBSE and state board exams', 'description': 'Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams. Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams. Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams. announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams', 'target': ['teachers'], 'attachments': [{'title': 'Circular A1.pdf', 'downloadURL': 'https://linktoattachment.com/documents/Circular A1.pdf', 'mimetype': 'application/pdf'}]}, {'announcementId': '1', 'sourceId': 'National Council For Teacher Education', 'createdBy': 'Creator1', 'createdOn': '2017-10-24', 'readBy': ['1234-12341-12313-132123', '1234-12341-12313-324234'], 'type': 'Circular', 'links': ['https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=D8r2WbjkOsKL8Qe4pJeACA', 'https://diksha.gov.in/#documents'], 'title': 'Exam dates announced for CBSE and state board exams', 'description': 'Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams', 'target': ['teachers'], 'attachments': [{'title': 'Circular A1.pdf', 'downloadURL': 'https://linktoattachment.com/documents/Circular A1.pdf', 'mimetype': 'application/pdf'}]}, {'announcementId': '1', 'sourceId': 'National Council For Teacher Education', 'createdBy': 'Creator1', 'createdOn': '2017-10-24', 'readBy': ['1234-12341-12313-132123', '1234-12341-12313-324234'], 'type': 'Circular', 'links': ['https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=D8r2WbjkOsKL8Qe4pJeACA', 'https://diksha.gov.in/#documents'], 'title': 'Exam dates announced for CBSE and state board exams', 'description': 'Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams', 'target': ['teachers'], 'attachments': [{'title': 'Circular A1.pdf', 'downloadURL': 'https://linktoattachment.com/documents/Circular A1.pdf', 'mimetype': 'application/pdf'}]}, {'announcementId': '1', 'sourceId': 'National Council For Teacher Education', 'createdBy': 'Creator1', 'createdOn': '2017-10-24', 'readBy': ['1234-12341-12313-132123', '1234-12341-12313-324234'], 'type': 'Circular', 'links': ['https://docs.google.com/spreadsheets/d/1kvDc4mq_GSjd1lo8kKn3d6FGwMlV2QENmFy3EH8kvDc4mq_GSjd1lo8kKn3d6FGwMlV2QENmFy3EH8kvDc4mq_GSjd1lo8kKn3d6FGwMlV2QENmFy3EH8PBKI/edit?ts=58ff1efc#gid=1251924770', 'https://diksha.gov.in/#documents'], 'title': 'Exam dates announced for CBSE and state board exams', 'description': 'Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams. Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams. Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams. Description goes here for the announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams. announcement exam date announced for CBSC and state board exams announcement exam date announced for CBSC and state board exams', 'target': ['teachers'], 'attachments': [{'title': 'Circular A1.pdf', 'downloadURL': 'https://linktoattachment.com/documents/Circular A1.pdf', 'mimetype': 'application/pdf'}, {'title': 'Circular A1.pdf', 'downloadURL': 'https://linktoattachment.com/documents/Circular A1.pdf', 'mimetype': 'application/pdf'}, {'title': 'Circular A1.pdf', 'downloadURL': 'https://linktoattachment.com/documents/Circular A1.pdf', 'mimetype': 'application/pdf'}]}]}}
    }

    /**
     * @method getFileExtension
     * @desc Get file extension
     * @memberOf Services.announcementService
     * @param {string}  mimeType - Mime type
     * @returns {string} returns extension of a file
     * @instance
     */
    this.getFileExtension = function (mimeType) {
      var extension = mimeType === 'application/pdf' ? 'PDF' : (mimeType === 'application/png' ? 'PNG' : 'JPEG')
      return extension
    }

    /**
     * @method createAnnouncement
     * @desc Send announcement data to API
     * @memberOf Services.announcementService
     * @param {object}  req - Announcement form post value
     * @returns {object} returns response of API
     * @instance
     */
    this.createAnnouncement = function (req) {
      return {'id': 'api.plugin.announcement.create', 'ver': '1.0', 'ts': '2017-10-24 17:30:23:540+0530', 'params': {'resmsgid': 'ea764b40-b8b2-11e7-ba5b-1991e583a6a8', 'msgid': null, 'status': 'successful', 'err': '', 'errmsg': ''}, 'responseCode': 'OK', 'result': {'announcementId': '2344-1234-1234-12312', 'sourceId': 'some-organisation-id', 'createdBy': 'Creator1', 'createdOn': '2017-10-24', 'type': 'announcement', 'links': ['https://linksToOtheresources.com'], 'title': 'Monthy Status', 'description': 'some description', 'target': ['teachers'], 'attachments': [{'title': 'circular.pdf', 'downloadURL': 'https://linktoattachment', 'mimetype': 'application/pdf'}]}}
    }

    /**
     * @method uploadAttachment
     * @desc Send select file to API
     * @memberOf Services.announcementService
     * @param {object}  req - file upload data
     * @returns {object} returns response of API
     * @instance
     */
    this.uploadAttachment = function (req) {
      return httpServiceJava.get('localhost:3000/api/announcement/v1/attachment/upload')
    }
  }])
