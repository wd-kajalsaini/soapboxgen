import { useState, useRef } from 'react';

function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-new">
        <div className="container hero-new-container">
          <div className="hero-new-content">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
              AI-Powered Personal Branding
            </div>

            <h1 className="hero-new-title">
              Transform Your Job Applications with <span className="gradient-text">AI-Powered Personal Brand Videos</span>
            </h1>

            <p className="hero-new-subtitle">
              Create compelling 30-second video introductions that showcase who you are, not just what you do. Stand out in competitive job markets with AI-generated scripts and professional video creation.
            </p>

            <ul className="hero-features">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                AI-Generated Personalized Scripts
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Professional Video Creation in Minutes
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Integrate Personal Photos & Stories
              </li>
            </ul>

            <div className="hero-new-buttons">
              <a href="https://tally.so/r/VLGzag" className="btn-hero-primary" target="_blank" rel="noopener">
                Create Your Personal Brand Video
              </a>
              <button className="btn-hero-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                Watch Demo
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-icon-wrapper blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">2,500+</span>
                  <span className="stat-label">Job Seekers Helped</span>
                </div>
              </div>
              <div className="hero-stat">
                <div className="stat-icon-wrapper green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">85%</span>
                  <span className="stat-label">Interview Rate</span>
                </div>
              </div>
              <div className="hero-stat">
                <div className="stat-icon-wrapper purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="stat-content">
                  <span className="stat-number">4.9/5</span>
                  <span className="stat-label">User Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-new-image">
            <img src="/Soapbox_Heroes.jpg" alt="Professional video branding" loading="eager" />
          </div>
        </div>
      </section>

      {/* Founder Intro Video Section */}
      <section className="founder-intro-section">
        <div className="container">
          <h2 className="section-title">A message from the founder</h2>
          <div className="founder-intro-content">
            <div className="video-placeholder">
              <div className="video-frame">
                <div className="video-container">
                  {!isVideoPlaying && (
                    <div className="video-overlay" onClick={handlePlayVideo}>
                      <img
                        src="/videos/video-thumbnail.png"
                        alt="Video thumbnail"
                        className="video-thumbnail"
                      />
                      <button className="play-button" aria-label="Play video">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    </div>
                  )}
                  <video
                    ref={videoRef}
                    width="100%"
                    controls
                    className={`founder-video ${isVideoPlaying ? 'visible' : 'hidden'}`}
                  >
                    <source src="/videos/Founders Message V2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="founder-message">
              <p className="founder-text">Hi, I'm Richard. I spent 19 years as a recruiter reviewing thousands of applications. I know exactly what gets candidates noticed—and what gets them ignored.</p>
              <p className="founder-text">I built SoapBoxGen because I saw too many qualified candidates disappear into resume black holes, while less qualified candidates with better connections got interviews.</p>
              <p className="founder-text emphasis">Your resume gets you screened. Video gets you seen.</p>
              <p className="founder-signature">— Richard, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">You're invisible in a stack of 200 resumes</h2>
          <div className="problem-story">
            <p>You spent hours tailoring your resume. Hit submit. And then... nothing. You're Resume #847 in an ATS black hole.</p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-number">98%</div>
              <h3>of applications never reach a human</h3>
            </div>
            <div className="problem-card">
              <div className="problem-number">5 sec</div>
              <h3>average time a recruiter spends on your resume</h3>
            </div>
            <div className="problem-card">
              <div className="problem-number">$0</div>
              <h3>what your personality is worth on paper</h3>
            </div>
          </div>

          <div className="pain-points">
            <h3>Sound familiar?</h3>
            <ul className="pain-list">
              <li>"I'm great in interviews, but I can't get past the resume screen."</li>
              <li>"My background is unconventional—I need to explain my story."</li>
              <li>"I have 10 years of experience but keep losing to keyword-stuffed resumes."</li>
              <li>"I'm applying to remote jobs where culture fit matters more than credentials."</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <h2 className="section-title">Stand out with <span className="accent">authentic video</span></h2>
          <p className="section-intro">SoapBoxGen helps you create a professional 30-second video introduction that shows hiring managers who you are—not just what's on your resume.</p>

          <div className="how-it-works">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Upload Your Resume</h3>
              <p>Our AI analyzes your experience and generates a personalized script highlighting your strongest selling points.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Refine Your Script</h3>
              <p>Edit the AI-generated script to match your voice. Add your personality. Make it yours.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Record with Real-Time Coaching</h3>
              <p>Our platform guides you through recording with instant feedback on framing, lighting, audio quality, eye contact, and pacing.</p>
              <div className="quality-features">
                <span className="feature-tag">✓ Face centering detection</span>
                <span className="feature-tag">✓ Lighting optimization</span>
                <span className="feature-tag">✓ Audio level monitoring</span>
                <span className="feature-tag">✓ Speaking pace guidance</span>
                <span className="feature-tag">✓ Eye contact coaching</span>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Share Your Profile</h3>
              <p>Get a unique link to share with job applications. Track who watches and when.</p>
            </div>
          </div>

          <div className="authenticity-callout">
            <div className="callout-icon">🔒</div>
            <div className="callout-content">
              <h3>Native Recording = Authentic You</h3>
              <p>All videos are recorded directly in our platform—no uploads allowed. This ensures authenticity for hiring managers and levels the playing field for all candidates. Professional quality without professional production costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Guidance Section */}
      <section className="quality-section">
        <div className="container">
          <h2 className="section-title">Never recorded a video before? We've got you covered.</h2>
          <p className="section-intro">Our platform provides real-time quality coaching so your video looks and sounds professional—even if you've never been on camera before.</p>

          <div className="quality-grid">
            <div className="quality-item">
              <div className="quality-icon">🎯</div>
              <h3>Framing & Composition</h3>
              <p>Real-time detection ensures you're centered in the frame with proper headroom.</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">💡</div>
              <h3>Lighting Guidance</h3>
              <p>Instant feedback on whether you're too dark, backlit, or perfectly lit.</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">🎤</div>
              <h3>Audio Quality</h3>
              <p>Level monitoring ensures you're clearly audible without distortion.</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">👁️</div>
              <h3>Eye Contact Coaching</h3>
              <p>Visual cues help you maintain natural eye contact with the camera.</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">⏱️</div>
              <h3>Pacing Feedback</h3>
              <p>Guidance on speaking speed to ensure you're clear and confident.</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">🔄</div>
              <h3>Unlimited Practice</h3>
              <p>Record, review, and re-do as many times as you need. Submit only when you're ready.</p>
            </div>
          </div>

          <div className="quality-assurance">
            <h3>Quality Gates Before Submission</h3>
            <p>You can't submit your video until minimum quality standards are met. This protects you from accidentally sharing a low-quality recording and ensures hiring managers take your video seriously.</p>
          </div>
        </div>
      </section>

      {/* DEI Section */}
      <section className="dei-section">
        <div className="container">
          <h2 className="section-title">Doesn't video introduce bias?</h2>
          <div className="dei-content">
            <p className="dei-intro">We've heard this concern, and it's valid. Here's our approach:</p>

            <div className="dei-point">
              <h3>Video reveals what resumes already reveal—and more fairly.</h3>
              <p>Resumes contain bias signals too: names (indicating race/ethnicity), addresses (socioeconomic status), university names (privilege), graduation years (age), and employment gaps.</p>
              <p>The difference is that video lets you show <strong>skills that matter</strong>—like communication, presence, and authenticity—instead of being judged solely on credential proxies.</p>
            </div>

            <div className="commitment-box">
              <h3>Our Commitment to Fairness</h3>
              <ul className="commitment-list">
                <li><strong>You control what you share.</strong> Choose your setting, outfit, and presentation style.</li>
                <li><strong>No AI analysis of appearance.</strong> We don't use algorithms to analyze facial expressions, tone, or any visual attributes. Humans watch your video, not AI.</li>
                <li><strong>Native recording levels the field.</strong> No one can outsource to professional video services—everyone uses the same tools and quality coaching.</li>
                <li><strong>Quality coaching for all.</strong> Real-time feedback helps candidates from all backgrounds present professionally.</li>
              </ul>
            </div>

            <p className="dei-closing">Video is a tool. Like any tool, it can be used fairly or unfairly. We're building safeguards to promote fair use, and we give <em>you</em> the agency to present yourself on your own terms.</p>
          </div>
        </div>
      </section>

      {/* Why Not Just Use Your Phone Section */}
      <section className="differentiation-section">
        <div className="container">
          <h2 className="section-title">Why not just record on my phone and upload to YouTube?</h2>
          <div className="comparison-grid">
            <div className="comparison-column">
              <h3 className="comparison-title negative">DIY Video</h3>
              <ul className="comparison-list">
                <li>❌ No script guidance—you're guessing what to say</li>
                <li>❌ No quality coaching—you don't know if lighting/audio is good</li>
                <li>❌ No feedback loop—record blind and hope it works</li>
                <li>❌ Hiring managers question authenticity of polished videos</li>
                <li>❌ YouTube links look unprofessional in applications</li>
                <li>❌ No analytics on who watched or when</li>
              </ul>
            </div>
            <div className="comparison-column">
              <h3 className="comparison-title positive">SoapBoxGen</h3>
              <ul className="comparison-list">
                <li>✅ AI-generated script based on your actual experience</li>
                <li>✅ Real-time coaching on technical quality</li>
                <li>✅ Instant feedback during recording</li>
                <li>✅ Native recording proves authenticity</li>
                <li>✅ Professional platform built for hiring</li>
                <li>✅ Track engagement and views</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-new">
        <div className="container">
          <div className="benefits-header">
            <h2 className="benefits-title">
              Everything You Need to Create Your <span className="gradient-text">Personal Brand Video</span>
            </h2>
            <p className="benefits-subtitle">
              Our AI-powered platform combines cutting-edge technology with proven personal branding strategies to help you create videos that truly represent who you are.
            </p>
          </div>

          <div className="benefits-grid-new">
            <div className="benefit-card-new">
              <div className="benefit-icon blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3>AI Script Generation</h3>
              <p>Get personalized 30-second scripts based on your resume, achievements, and personal brand assessment.</p>
            </div>

            <div className="benefit-card-new">
              <div className="benefit-icon purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 7l-7 5 7 5V7z"></path>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3>Professional Video Creation</h3>
              <p>Record directly in your browser with built-in teleprompter and professional templates.</p>
            </div>

            <div className="benefit-card-new">
              <div className="benefit-icon green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h3>Personal Media Integration</h3>
              <p>Showcase your personality with photos and videos that tell your unique story.</p>
            </div>

            <div className="benefit-card-new">
              <div className="benefit-icon orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3>Personal Brand Assessment</h3>
              <p>Discover your professional archetype with our 10-question assessment.</p>
            </div>

            <div className="benefit-card-new">
              <div className="benefit-icon indigo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3>Quick & Easy Process</h3>
              <p>From signup to finished video in under 20 minutes. No technical skills required.</p>
            </div>

            <div className="benefit-card-new">
              <div className="benefit-icon gray">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Stand Out to Employers</h3>
              <p>Make memorable first impressions that go beyond traditional resumes and cover letters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="pricing-cta-section">
        <div className="container">
          <h2 className="section-title">Join 100 Founding Members</h2>
          <p className="section-intro">Early access launching late February 2026. Lock in founding member pricing now.</p>

          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-badge">Students</div>
              <div className="pricing-amount">$29</div>
              <div className="pricing-detail">One-time payment</div>
              <ul className="pricing-features">
                <li>Everything included</li>
                <li>Lifetime access</li>
                <li>No recurring fees</li>
                <li>Update anytime</li>
              </ul>
              <a href="https://tally.so/r/VLGzag" className="btn btn-primary" target="_blank" rel="noopener">
                Apply for Student Access
              </a>
              <p className="pricing-note">Valid .edu email required</p>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-badge">General Public</div>
              <div className="pricing-amount">$49</div>
              <div className="pricing-detail">One-time payment</div>
              <div className="pricing-compare">Regular price: $149</div>
              <ul className="pricing-features">
                <li>Everything included</li>
                <li>Lifetime access</li>
                <li>No recurring fees</li>
                <li>Update anytime</li>
              </ul>
              <a href="https://tally.so/r/ODQeeR" className="btn btn-primary" target="_blank" rel="noopener">
                Join the Waitlist
              </a>
              <p className="pricing-note">Limited to 100 founding members</p>
            </div>
          </div>

          <p className="credibility">Built by Richard, a former recruiter with 19 years of experience reviewing thousands of applications. I know what gets candidates noticed—and what gets them ignored.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>When does this launch?</h3>
              <p>Late February 2026. Founding members get early access and lifetime pricing at $29 (students) or $49 (general public).</p>
            </div>

            <div className="faq-item">
              <h3>Is this a subscription?</h3>
              <p>No. One-time payment for lifetime access. Create and update your video profile as many times as you want.</p>
            </div>

            <div className="faq-item">
              <h3>I've never recorded a video before. Will I look unprofessional?</h3>
              <p>That's exactly why we built real-time quality guidance. We check your lighting, framing, and audio before you record. You'll get feedback like "Move closer to the camera" or "Face the window for better lighting" before you hit record. Professional results without professional equipment.</p>
            </div>

            <div className="faq-item">
              <h3>Will hiring managers actually watch these?</h3>
              <p>Yes—when it saves them time. A 30-second video lets them assess communication skills instantly, rather than scheduling 15-30 minute phone screens with dozens of candidates.</p>
            </div>

            <div className="faq-item">
              <h3>Can I update my video later?</h3>
              <p>Absolutely. Your lifetime access means you can record new versions anytime—whether you're targeting a different industry, gained new experience, or just want to refresh it.</p>
            </div>

            <div className="faq-item">
              <h3>Why can't I upload my own video?</h3>
              <p>Native recording ensures authenticity and levels the playing field. Everyone uses the same tools and quality coaching—candidates with access to professional video services don't get an unfair advantage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to be seen?</h2>
          <p>Join 100 founding members who are getting early access in February 2026.</p>
          <div className="cta-group">
            <a href="https://tally.so/r/VLGzag" className="btn btn-primary" target="_blank" rel="noopener">
              Students - $29
            </a>
            <a href="https://tally.so/r/ODQeeR" className="btn btn-secondary" target="_blank" rel="noopener">
              General Public - $49
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
