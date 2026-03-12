# Deployment Notes for Rayvise

## ✅ Fixed: Custom Domain Support

**Date:** 2026-03-12  
**Issue:** Deployments were breaking the custom domain (rayvise.ca) by removing the CNAME file

### **Solution:**

1. **Added CNAME to public/ directory**
   - File: `public/CNAME`
   - Content: `rayvise.ca`
   - This file is automatically copied to `dist/` during build

2. **Updated deploy-version.sh script**
   - Now preserves CNAME file during gh-pages deployment
   - Backs up CNAME before cleaning build artifacts
   - Restores CNAME after copying new build

### **How It Works:**

**Before fix:**
```
Build → Deploy to gh-pages → CNAME deleted → Custom domain broken ❌
```

**After fix:**
```
Build (includes CNAME) → Deploy to gh-pages (preserves CNAME) → Custom domain works ✅
```

### **Important:**

- **Always use `./deploy-version.sh`** for deployments
- **Never manually delete CNAME** from gh-pages branch
- CNAME file tells GitHub Pages to serve at rayvise.ca (not github.io subdomain)

---

## Current Custom Domain Setup

**Domain:** rayvise.ca  
**DNS Provider:** Netfirms  
**Hosting:** GitHub Pages

**DNS Records (Configured):**
```
A     @    → 185.199.108.153
A     @    → 185.199.109.153
A     @    → 185.199.110.153
A     @    → 185.199.111.153
CNAME www  → sixspeedpaul.github.io
```

**GitHub Pages Settings:**
- Custom domain: `rayvise.ca`
- HTTPS: Should be enabled in repo settings
- Source: gh-pages branch / root

**Live URLs:**
- https://rayvise.ca ✅
- https://www.rayvise.ca ✅
- https://sixspeedpaul.github.io/rayvise/ ✅ (redirects to rayvise.ca)

---

## Deployment Workflow (With Custom Domain)

### **Step 1: Make Changes**
```bash
cd ~/.openclaw/workspace/projects/rayvise
# Edit src/config.ts or add images to public/
```

### **Step 2: Deploy**
```bash
./deploy-version.sh "Brief description" "- Change 1\n- Change 2"
```

### **Step 3: Verify**
```bash
# Wait ~30 seconds, then check:
curl -I https://rayvise.ca
# Should return HTTP 200
```

---

## Troubleshooting Custom Domain

### **If rayvise.ca stops working:**

1. **Check CNAME file exists:**
   ```bash
   git checkout gh-pages
   cat CNAME
   # Should output: rayvise.ca
   ```

2. **Check DNS:**
   ```bash
   dig rayvise.ca +short
   # Should show: 185.199.108-111.153
   ```

3. **Check GitHub Pages settings:**
   - Go to: https://github.com/sixspeedpaul/rayvise/settings/pages
   - Custom domain should show: rayvise.ca
   - DNS check should be green ✅

4. **Redeploy if needed:**
   ```bash
   git checkout main
   ./deploy-version.sh "Force redeploy" "- Fixing custom domain"
   ```

---

## Email Safety

**MX Records (Keep these!):**
- Google Workspace email is configured via Netfirms MX records
- These are separate from the website A records
- Changing website DNS does NOT affect email

**MX Records in Netfirms:**
```
MX  @  → aspmx.l.google.com (priority 10)
MX  @  → alt1.aspmx.l.google.com (priority 20)
MX  @  → alt2.aspmx.l.google.com (priority 30)
MX  @  → alt3.aspmx.l.google.com (priority 40)
MX  @  → alt4.aspmx.l.google.com (priority 50)
```

---

*Last updated: 2026-03-12*
