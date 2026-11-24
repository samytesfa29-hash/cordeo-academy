"""Update public metadata and preview links when the approved domain changes."""
from pathlib import Path
from urllib.parse import urlsplit
import json,sys

root=Path(__file__).resolve().parents[1]
if len(sys.argv)!=2:
 raise SystemExit('Usage: python scripts/update-domain.py https://www.example.org/')
new_base=sys.argv[1].rstrip('/')+'/'
parts=urlsplit(new_base)
if parts.scheme!='https' or not parts.hostname or parts.username or parts.password or parts.query or parts.fragment:
 raise SystemExit('Use a complete public HTTPS website URL without credentials, query, or fragment.')
config_path=root/'site-config.json'
config=json.loads(config_path.read_text(encoding='utf-8'))
old_base=config['public_base_url']
preview_base='https://samytesfa29-hash.github.io/cordeo-academy/'
for file in root.glob('*.html'):
 text=file.read_text(encoding='utf-8')
 for current in {old_base,preview_base}:text=text.replace(current,new_base)
 file.write_text(text,encoding='utf-8')
config['public_base_url']=new_base
config_path.write_text(json.dumps(config,indent=2)+'\n',encoding='utf-8')
print('Updated full public URLs in the HTML files. School email addresses and payment-provider links are unchanged.')
