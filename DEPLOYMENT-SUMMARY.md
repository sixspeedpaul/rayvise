# 🚀 Rayvise Deployment Summary

**Date:** 2026-03-12  
**Status:** ✅ Successfully deployed to GitHub Pages

---

## ✅ What's Been Done

1. **Created GitHub Repository**
   - Repo: https://github.com/sixspeedpaul/rayvise
   - Visibility: Public
   - Description: Rayvise Photography Portfolio

2. **Deployed to GitHub Pages**
   - Live URL (temporary): https://sixspeedpaul.github.io/rayvise/
   - Branch: `gh-pages`
   - Status: Building/Built
   - HTTPS: Will be enabled after custom domain setup

3. **Site Built & Optimized**
   - Build tool: Vite
   - Output: Static HTML/CSS/JS
   - Total size: ~500KB (optimized)
   - Images: All included in deployment

---

## 🎯 What You Need To Do Next

### Connect rayvise.ca Domain

**Read:** `DNS-SETUP-GUIDE.md` (in this directory) for detailed step-by-step instructions.

**Quick version:**

1. **Log into Netfirms**: https://www.netfirms.com
2. **Navigate to Domain Manager** and click Manage on rayvise.ca
3. **Switch nameservers** from Wix to Netfirms default DNS:
   - Current: `ns2.wixdns.net`, `ns3.wixdns.net`
   - New: Netfirms default nameservers (check your control panel)
4. **Go to DNS Management/Zone Editor**, add these records:

   ```
   A Record:  @ → 185.199.108.153
   A Record:  @ → 185.199.109.153
   A Record:  @ → 185.199.110.153
   A Record:  @ → 185.199.111.153
   CNAME:     www → sixspeedpaul.github.io
   ```

5. **KEEP your email MX records** (already there):
   ```
   MX: @ → aspmx.l.google.com (priority 10)
   MX: @ → alt1.aspmx.l.google.com (priority 20)
   MX: @ → alt2.aspmx.l.google.com (priority 30)
   MX: @ → alt3.aspmx.l.google.com (priority 40)
   MX: @ → alt4.aspmx.l.google.com (priority 50)
   ```

6. **Wait 1-6 hours** for DNS propagation
7. **Configure custom domain in GitHub**:
   - Go to: https://github.com/sixspeedpaul/rayvise/settings/pages
   - Enter: `rayvise.ca`
   - Click Save
   - Enable HTTPS after verification

---

## 📊 Current DNS Status

**Nameservers (need to change):**
- `ns2.wixdns.net`
- `ns3.wixdns.net`

**Email (keep as-is):**
- Google Workspace MX records: ✅ Configured correctly

**Website (needs update):**
- Currently: Points to Wix (or nothing)
- Target: GitHub Pages (4 A records + CNAME)

---

## 🔐 Email Safety

Your email is hosted with **Google Workspace**. The MX records are already configured correctly:

✅ **Will NOT be affected** as long as you:
1. Keep the MX records when switching DNS
2. Keep any TXT records (SPF/DKIM)

❌ **DO NOT delete:**
- Any MX records
- TXT records starting with `v=spf1`
- Any DKIM records (usually look like: `google._domainkey`)

---

## 🛠️ Making Updates to the Site

### Quick Edits

Edit content in `src/config.ts` and redeploy:

```bash
cd ~/.openclaw/workspace/projects/rayvise
# Edit src/config.ts
npm run build
git checkout gh-pages
rm -rf assets *.html *.jpg *.png *.css *.js 2>/dev/null
cp -r dist/* .
git add -A
git commit -m "Update content"
git push origin gh-pages
git checkout main
```

### Major Changes

1. Make changes on `main` branch
2. Commit and push to GitHub
3. Rebuild and deploy to `gh-pages` (as above)

---

## 📁 Project Structure

```
rayvise/
├── src/
│   ├── config.ts         ← Edit content here
│   ├── sections/         ← React components
│   └── components/       ← Reusable UI
├── public/               ← Images
├── dist/                 ← Build output (not in git)
├── DNS-SETUP-GUIDE.md   ← Detailed DNS instructions
└── PROJECT-INFO.md       ← Technical overview
```

---

## 🎨 Customizing Content

All content lives in **`src/config.ts`**:

- `heroConfig` - Main hero section
- `aboutConfig` - About section
- `worksConfig` - Portfolio items
- `servicesConfig` - Services offered
- `pricingConfig` - Pricing plans
- `blogConfig` - Blog posts
- `contactConfig` - Contact form
- `footerConfig` - Footer content

After editing, run `npm run build` and redeploy to `gh-pages`.

---

## 🧰 Useful Commands

```bash
# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check git status
git status

# View live site (temporary URL)
open https://sixspeedpaul.github.io/rayvise/
```

---

## 📞 Support

- **DNS Issues**: Read `DNS-SETUP-GUIDE.md`
- **GitHub Pages**: https://docs.github.com/en/pages
- **Netfirms Support**: https://www.netfirms.com/contact/
- **Google Workspace**: https://admin.google.com

---

## 🎯 Next Steps Summary

1. ☐ Read `DNS-SETUP-GUIDE.md`
2. ☐ Change nameservers to Namecheap BasicDNS
3. ☐ Add A records and CNAME for website
4. ☐ Verify email MX records are intact
5. ☐ Wait for DNS propagation (check dnschecker.org)
6. ☐ Configure custom domain in GitHub Pages settings
7. ☐ Enable HTTPS
8. ☐ Test rayvise.ca loads the site
9. ☐ Test email still works

**Timeline:** 1-6 hours for DNS, then 10 minutes for GitHub verification.

---

**Questions?** Just ask! 🦞
