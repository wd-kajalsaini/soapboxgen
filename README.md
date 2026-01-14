# SoapBoxGen Website

Complete 4-page website for SoapBoxGen - Video profile platform for job seekers.

## 📁 Files Included

- `index.html` - Job Seekers landing page (main page)
- `hiring-managers.html` - Hiring Managers page
- `career-services.html` - Career Services page
- `recruiters.html` - Recruiters page
- `styles.css` - Complete styling (shared across all pages)
- `Soapbox_Heroes.jpg` - Hero image for job seekers page
- `README.md` - This file

## 🎨 Design Features

### Typography
- **Display Font**: Crimson Pro (sophisticated serif for headlines)
- **Body Font**: DM Sans (clean, modern sans-serif)
- Avoids generic fonts like Inter, Roboto, Arial

### Color Palette
- **Primary**: Deep forest green (#1a4d2e)
- **Accent**: Warm gold (#d4a373)
- **Background**: Cream & beige tones
- Professional, editorial aesthetic

### Key Elements
- ✅ Intro video placeholder section (for Richard's video)
- ✅ Native recording features highlighted
- ✅ DEI section addressing bias concerns
- ✅ Video quality guidance sections
- ✅ Dual pricing for students ($29) vs general public ($49)
- ✅ NO "pilot" language - positioned as "Early Access Launch"
- ✅ Late February 2026 launch timeline
- ✅ Recruiter dual value prop (efficiency + client value)
- ✅ Career services note about universities

## 🔗 Tally Forms Already Integrated

All your Tally form IDs are already integrated:

- **Job Seekers (Students)**: https://tally.so/r/VLGzag
- **Job Seekers (General)**: https://tally.so/r/ODQeeR
- **Hiring Managers**: https://tally.so/r/EkqGJr
- **Career Coaches**: https://tally.so/r/44Q7YO
- **Recruiters**: https://tally.so/r/1AX9eW

## 🚀 Quick Start

### Option 1: Netlify (Recommended - Easiest)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign in (or create free account)
3. Drag and drop all **7 files** into Netlify (including Soapbox_Heroes.jpg)
4. Your site goes live instantly!
5. Get custom domain: yoursite.netlify.app

### Option 2: GitHub Pages (Free Forever)

1. Create GitHub account at [github.com](https://github.com)
2. Create new repository named `soapboxgen`
3. Upload all **7 files** (including the image)
4. Go to Settings → Pages
5. Select "Deploy from main branch"
6. Your site: yourusername.github.io/soapboxgen

### Option 3: Vercel (Fast & Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import all **7 files**
5. Deploy!

## 📝 To-Do Before Launch

### 1. Add Your Intro Video
The placeholder is in `index.html` at line ~60:

```html
<div class="video-placeholder">
    <div class="video-frame">
        <!-- Replace this section with your actual video embed -->
    </div>
</div>
```

**How to add your video:**
- Record video and upload to YouTube/Vimeo
- Get embed code
- Replace the placeholder div with embed iframe
- Or use HTML5 video tag for self-hosted video

### 2. Optional: Add Logo
Currently using text "SoapBoxGen". To add a logo:
- Create logo image (PNG with transparent background recommended)
- Save as `logo.png`
- Replace in all HTML files (line ~20):

```html
<div class="logo">
    <img src="logo.png" alt="SoapBoxGen" style="height: 40px;">
</div>
```

### 3. Test All Forms
Click each CTA button to verify Tally forms open correctly:
- Students button → VLGzag form
- General public button → ODQeeR form
- Hiring managers → EkqGJr form
- Career services → 44Q7YO form
- Recruiters → 1AX9eW form

## 🎯 Page Structure

### 1. Job Seekers Page (index.html)
- Hero with intro video placeholder
- Problem section (resume black hole)
- Solution with native recording features
- Quality guidance section
- DEI section
- Why not DIY video comparison
- Benefits
- Dual pricing (students $29 / general $49)
- FAQ
- Final CTA

### 2. Hiring Managers Page
- Hero with time-saving stats
- Problem (drowning in resumes)
- Solution (see skills in 30 seconds)
- How it works
- Authenticity section
- DEI best practices
- Free platform + premium options
- FAQ

### 3. Career Services Page
- Hero (independent coaches focus)
- Problem (clients look same on paper)
- Solution (differentiation)
- How it works
- Built with equity section
- Pricing tiers ($299-799/month)
- University note
- FAQ

### 4. Recruiters Page
- Hero with dual value prop
- Problem (candidates lost in noise)
- Solution (video differentiation)
- Dual value props (save time + win trust)
- Competitive advantage scenario
- Authenticity section
- Use cases
- Free + premium pricing
- FAQ

## 📱 Mobile Responsive

All pages are fully responsive:
- Desktop: Full grid layouts
- Tablet: Adjusted columns
- Mobile: Single column, stacked sections

## 🎨 Customization

### Change Colors
Edit `styles.css` lines 12-20:

```css
:root {
    --primary: #1a4d2e;     /* Your main color */
    --accent: #d4a373;      /* Your accent color */
    /* etc. */
}
```

### Change Fonts
Edit Google Fonts link in each HTML file (line ~8) and update CSS (lines 22-23)

### Adjust Spacing
Modify spacing variables in `styles.css` lines 25-30

## ✅ What's Already Done

- ✅ All Tally form links integrated
- ✅ Responsive design complete
- ✅ Professional typography & colors
- ✅ All content from conversation included
- ✅ Late February 2026 timeline
- ✅ No "pilot" language anywhere
- ✅ Student vs general pricing
- ✅ Native recording emphasized
- ✅ DEI sections on all pages
- ✅ Quality guidance detailed
- ✅ Recruiter dual value prop
- ✅ University partnership note

## 🔄 Updates Needed

1. **Add your intro video** (when ready)
2. **Optional: Add logo** (if you create one)
3. **Test all forms** (verify they work)
4. **Deploy to hosting** (choose one above)

## 💡 Tips

- **Launch without video**: The site works fine without the intro video - just has a placeholder
- **Simple logo**: Use free tools like Canva to create a text-based logo quickly
- **Test mobile**: Check site on your phone before officially launching
- **Analytics**: Add Google Analytics code before launch to track visitors

## 📞 Support

If you need to edit anything:
1. Right-click any HTML file → Open with → Text Editor
2. Search for the text you want to change
3. Edit and save
4. Re-upload to hosting

## 🎉 Ready to Launch!

Your complete 4-page SoapBoxGen website is ready. All content from the "Analyzing soapboxgen's landing page messaging" conversation has been integrated.

**Next Steps:**
1. Upload all 5 files to hosting platform
2. Test each page and form
3. Add your intro video when ready
4. Share with your network!

---

Built with attention to detail and conversion optimization. Good luck with the launch! 🚀
