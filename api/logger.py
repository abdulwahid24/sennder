import logging
import sys
import time
import requests
import textwrap

log = logging.getLogger(__name__)


def logRoundtrip(response, *args, **kwargs):
    extra = {'req': response.request, 'res': response}
    log.debug('HTTP roundtrip', extra=extra)


def make_throttle_hook(timeout=1.0):
    """
    Returns a response hook function which sleeps for `timeout` seconds if
    response is not cached
    """
    def hook(response, *args, **kwargs):
        if not getattr(response, 'from_cache', False):
            print('sleeping')
            time.sleep(timeout)
        return response
    return hook


class HttpFormatter(logging.Formatter):

    def _formatHeaders(self, d):
        return '\n'.join(f'{k}: {v}' for k, v in d.items())

    def formatMessage(self, record):
        result = super().formatMessage(record)
        result += textwrap.dedent('''
            ---------------- Request ----------------
            {req.method} {req.url}
            ---------------- Response from cache {from_cache} ----------------
            {res.status_code} {res.reason}
        ''').format(
            req=record.req,
            res=record.res,
            from_cache=getattr(record.res, 'from_cache', False)
        )

        return result


formatter = HttpFormatter('{levelname}: {asctime} {name} {message}', style='{')
handler = logging.StreamHandler(sys.stdout)
handler.setFormatter(formatter)
log.addHandler(handler)
log.setLevel(logging.DEBUG)
