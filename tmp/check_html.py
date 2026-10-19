import re, os

all_files = []
all_files += sorted(f for f in os.listdir('.') if f.endswith('.html'))
for d in ['about', 'groups', 'contact', 'events', 'auditions']:
    fp = os.path.join(d, 'index.html')
    if os.path.exists(fp):
        all_files.append(fp)

ok = True
for fp in all_files:
    with open(fp) as f:
        c = f.read()
    issues = []
    if '<!DOCTYPE html>' not in c:
        issues.append('NO DOCTYPE')
    if 'lang="en"' not in c:
        issues.append('NO lang')
    if c.count('<div') != c.count('</div>'):
        issues.append('DIV imbalance')
    if re.search(r'</body>\s*<footer>', c):
        issues.append('FOOTER OUTSIDE BODY')
    if not re.search(r'</html>\s*$', c):
        issues.append('NO CLOSING HTML')
    if '<or>' in c:
        issues.append('INVALID <or>')
    without_comments = re.sub(r'<!--.*?-->', '', c, flags=re.DOTALL)
    if '<u1>' in without_comments or '</u1>' in without_comments:
        issues.append('INVALID <u1> outside comment')
    if issues:
        ok = False
        print(fp + ': ' + '; '.join(issues))
    else:
        print(fp + ': OK')

print()
print('ALL FILES ARE VALID HTML5!' if ok else 'SOME ISSUES REMAIN')