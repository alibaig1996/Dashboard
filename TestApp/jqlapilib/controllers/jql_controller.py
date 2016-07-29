# -*- coding: utf-8 -*-

"""
    jqlapilib.controllers.jql_controller

    This file was automatically generated by APIMATIC BETA v2.0 on 06/24/2016
"""

from ..api_helper import APIHelper
from ..configuration import Configuration
from ..http.http_request import HttpRequest
from ..http.http_response import HttpResponse
from ..controllers.base_controller import BaseController



class JQLController(BaseController):

    """A Controller to access Endpoints in the jqlapilib API."""

    def __init__(self, http_client = None, http_call_back = None):
        """Constructor which allows a different HTTP client for this controller."""
        BaseController.__init__(self, http_client, http_call_back)

    def create_jql_query(self,
                         query = None):
        """Does a POST request to /.

        Used for JQL query

        Args:
            query (string, optional): TODO: type description here. Example: 

        Returns:
            string: Response from the API. 

        Raises:
            APIException: When an error occurs while fetching the data from
                the remote API. This exception includes the HTTP Response
                code, an error message, and the HTTP body that was received in
                the request.

        """

        # The base uri for api requests
        _query_builder = Configuration.BASE_URI
 
        # Prepare query string for API call
        _query_builder += "/"

        # Process optional query parameters
        _query_parameters = {
            "script": query
        }
        
        # Validate and preprocess url
        _query_url = APIHelper.clean_url(_query_builder)

        # Prepare headers
        _headers = {
            "user-agent": "APIMATIC 2.0"
        }

        # Prepare the API call.
        _http_request = self.http_client.post(_query_url, headers=_headers, query_parameters=_query_parameters, username=Configuration.basic_auth_user_name, password=Configuration.basic_auth_password)

        # Invoke the on before request HttpCallBack if specified
        if self.http_call_back != None:
            self.http_call_back.on_before_request(_http_request)

        # Invoke the API call  to fetch the response.
        _response = self.http_client.execute_as_string(_http_request)

        # Invoke the on after response HttpCallBack if specified
        if self.http_call_back != None:
            self.http_call_back.on_after_response(_response)

        # Endpoint error handling using HTTP status codes.
        if _response.status_code == 404:
            return None

        # Global error handling using HTTP status codes.
        self.validate_response(_response)    

        # Return appropriate type
        return _response.raw_body


