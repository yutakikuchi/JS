#!/usr/bin/env python
# -*- coding: utf-8 -*-

from google.appengine.ext import webapp
from google.appengine.ext.webapp import template, util

class CrossDomain(webapp.RequestHandler):
  def get(self):
    self.response.headers[ 'Content-Type' ] = 'text/plain'
    '''    
    self.response.headers[ 'Access-Control-Allow-Origin' ] = '*'
    self.response.headers[ 'Access-Control-Allow-Methods' ] = 'GET'
    self.response.headers[ 'Access-Control-Allow-Headers' ] = '*'
    self.response.headers[ 'Access-Control-Allow-Age' ] = '86400'
    '''
    self.response.out.write( 'CrossDoaminRequest' )

def main():
  application = webapp.WSGIApplication([('/CrossDomain', CrossDomain)])
  util.run_wsgi_app(application)

if __name__ == '__main__':
  main()
