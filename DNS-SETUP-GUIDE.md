# DNS Setup Guide for rayvise.ca → GitHub Pages

## ✅ What's Done

1. **GitHub Repo Created**: https://github.com/sixspeedpaul/rayvise
2. **Site Deployed to GitHub Pages**: https://sixspeedpaul.github.io/rayvise/
3. **Status**: Building (should be live in 1-2 minutes)

---

## 🔧 Step-by-Step DNS Configuration

### Current Situation

Your domain `rayvise.ca` is registered with **Netfirms** but was configured to use **Wix** DNS servers. You need to:
- **Keep your email working** (currently hosted with Google Workspace/Gmail)
- **Point the website to GitHub Pages**

### Option 1: Use Netfirms DNS (RECOMMENDED)

This keeps email and website management in one place.

#### Step 1: Switch Back to Netfirms DNS

1. Go to: https://www.netfirms.com (login to your account)
2. Navigate to **Domains** or **Domain Manager**
3. Click **Manage** next to `rayvise.ca`
4. Find **Nameservers** section
5. Switch from Wix nameservers to **Netfirms default nameservers**

**Current nameservers** (Wix):
- `ns2.wixdns.net`
- `ns3.wixdns.net`

**New nameservers** (Netfirms default):
- Check your Netfirms control panel for their default nameservers
- Usually something like `ns1.netfirms.com` / `ns2.netfirms.com`

#### Step 2: Configure DNS Records in Netfirms

1. In your domain control panel, find **DNS Management** or **DNS Zone Editor**
2. Add/edit the following records:

**For Website (GitHub Pages):**

| Type  | Host | Value                  | TTL       |
|-------|------|------------------------|-----------|
| A     | @    | 185.199.108.153       | Automatic |
| A     | @    | 185.199.109.153       | Automatic |
| A     | @    | 185.199.110.153       | Automatic |
| A     | @    | 185.199.111.153       | Automatic |
| CNAME | www  | sixspeedpaul.github.io | Automatic |

**For Email (Google Workspace - KEEP THESE!):**

These records should already exist. If not, find them in your Google Workspace admin panel:

| Type | Host | Value                    | Priority | TTL       |
|------|------|--------------------------|----------|-----------|
| MX   | @    | aspmx.l.google.com       | 1        | Automatic |
| MX   | @    | alt1.aspmx.l.google.com  | 5        | Automatic |
| MX   | @    | alt2.aspmx.l.google.com  | 5        | Automatic |
| MX   | @    | alt3.aspmx.l.google.com  | 10       | Automatic |
| MX   | @    | alt4.aspmx.l.google.com  | 10       | Automatic |

**For Email Verification (Google SPF/DKIM - if they exist, keep them):**

| Type | Host | Value                                      | TTL       |
|------|------|--------------------------------------------|-----------|
| TXT  | @    | v=spf1 include:_spf.google.com ~all        | Automatic |
| TXT  | (varies) | (DKIM key from Google) | Automatic |

#### Step 3: Configure Custom Domain in GitHub

1. Go to: https://github.com/sixspeedpaul/rayvise/settings/pages
2. Under **Custom domain**, enter: `rayvise.ca`
3. Click **Save**
4. Wait for DNS check to pass (~10 minutes after DNS changes)
5. Check **Enforce HTTPS** once DNS is verified

---

### Option 2: Keep Using Wix DNS (More Complex)

If you want to keep using Wix nameservers:

1. Log into Wix DNS management
2. Add the same A records and CNAME as above
3. Make sure email MX records are intact

**I don't recommend this** because managing DNS through Wix is more restrictive.

### Option 3: Use Namecheap DNS (If You Have an Account)

If you also have a Namecheap account and prefer their DNS:
1. Point Netfirms nameservers to Namecheap's
2. Manage DNS through Namecheap instead

---

## 🕐 Timeline

1. **Now**: Change nameservers (if using Option 1)
2. **0-48 hours**: DNS propagation (usually 1-6 hours)
3. **After propagation**: Configure custom domain in GitHub
4. **10 minutes later**: Enable HTTPS

---

## ✅ Verification Checklist

After making changes, verify:

- [ ] `rayvise.ca` loads the website (may take 1-48 hours)
- [ ] `www.rayvise.ca` redirects to `rayvise.ca`
- [ ] Email still works (send/receive test)
- [ ] HTTPS is enabled (green padlock in browser)

---

## 🚨 Important Notes

### About Email

- **MX records control email routing** - DO NOT delete them
- **TXT records (SPF/DKIM)** help with email deliverability - keep them
- If email stops working, check your MX records match Google's requirements

### About DNS Propagation

- Changes can take **up to 48 hours** to fully propagate
- Use https://dnschecker.org to check propagation status
- Enter `rayvise.ca` and check A records globally

### About Wix

- If you're not using Wix for anything else, **switch away from their DNS**
- Wix nameservers are designed for Wix hosting
- You'll have more control with Netfirms DNS (or Namecheap if you prefer)

---

## 🔍 Finding Your Current DNS Configuration

To see what's currently set:

1. **Nameservers:**
   ```bash
   nslookup -type=NS rayvise.ca
   ```

2. **A Records:**
   ```bash
   nslookup rayvise.ca
   ```

3. **MX Records (Email):**
   ```bash
   nslookup -type=MX rayvise.ca
   ```

4. **TXT Records:**
   ```bash
   nslookup -type=TXT rayvise.ca
   ```

---

## 📧 Google Workspace Email Records

If you need to find your Google Workspace MX records:

1. Go to: https://admin.google.com
2. Navigate to: **Apps → Google Workspace → Gmail → MX records**
3. Copy the exact values shown there

Standard Google MX records (priority in parentheses):
- `aspmx.l.google.com` (1)
- `alt1.aspmx.l.google.com` (5)
- `alt2.aspmx.l.google.com` (5)
- `alt3.aspmx.l.google.com` (10)
- `alt4.aspmx.l.google.com` (10)

---

## 🆘 If Something Goes Wrong

### Email Stops Working

1. Check MX records in Namecheap Advanced DNS
2. Compare with Google Workspace admin panel
3. DNS changes can take time - wait 1-2 hours

### Website Doesn't Load

1. Check DNS propagation: https://dnschecker.org
2. Verify A records point to GitHub's IPs (185.199.108-111.153)
3. Make sure you've configured custom domain in GitHub repo settings

### Need to Rollback

1. Change nameservers back to current values (Wix or previous provider)
2. DNS will revert in 1-48 hours

---

## 📞 Support Contacts

- **Netfirms Support**: https://www.netfirms.com/contact/
- **Namecheap Support** (if using their DNS): https://www.namecheap.com/support/
- **GitHub Pages Docs**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **Google Workspace Support**: https://support.google.com/a

---

## 🎯 Quick Summary (TL;DR)

1. **Switch nameservers** to Netfirms default DNS (from Wix)
2. **Add 4 A records** for @ pointing to GitHub IPs
3. **Add CNAME** for www → sixspeedpaul.github.io
4. **Keep all MX and TXT records** for email
5. **Wait for DNS propagation** (1-6 hours usually)
6. **Configure custom domain** in GitHub Pages settings
7. **Enable HTTPS**

---

**Questions?** Just ask! 🦞
