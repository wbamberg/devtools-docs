#!/usr/bin/python2

import web
import requests

urls = (
    '/', 'index'
)

app = web.application(urls, globals())
render = web.template.render('templates/')

class index:
    def GET(self):
        return render.index()

if __name__ == '__main__':
    app.run()
