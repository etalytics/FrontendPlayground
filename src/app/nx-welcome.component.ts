import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="etalytics-welcome">
      <header class="header">
        <!-- Etalytics Logo/Heading -->
        <div class="logo-container">
          <h1 class="logo">Etalytics</h1>
        </div>
        
        <!-- Navigation Menu -->
        <nav class="navigation">
          <a href="#" class="nav-item">Home</a>
          <a href="#" class="nav-item">Solutions</a>
          <a href="#" class="nav-item">Products</a>
          <a href="#" class="nav-item">About</a>
          <a href="#" class="nav-item">Contact</a>
        </nav>
      </header>

      <main class="main-content">
        <!-- Hero Section with Tagline -->
        <section class="hero">
          <div class="hero-content">
            <h2 class="title">Welcome to Etalytics</h2>
            <p class="tagline">Transforming data into actionable insights for your business</p>
            <button class="cta-button">Get Started</button>
          </div>
        </section>

        <!-- Interactive Counter Section -->
        <section class="counter-section">
          <div class="counter-container">
            <h3>Interactive Counter</h3>
            <p class="counter-description">Click the button below to increase the counter</p>
            
            <!-- Counter Display -->
            <div class="counter-display">
              <span class="counter-value">{{ counter }}</span>
            </div>
            
            <!-- Counter Button -->
            <button class="counter-button" (click)="incrementCounter()">
              Increment Counter
            </button>
          </div>
        </section>

        <!-- Features Section -->
        <section class="features">
          <div class="feature">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" fill="#2563eb"/>
              </svg>
            </div>
            <h3>Data Analytics</h3>
            <p>Turn your data into valuable business insights</p>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#2563eb"/>
              </svg>
            </div>
            <h3>Machine Learning</h3>
            <p>Advanced ML algorithms to predict future trends</p>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                <path d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z" fill="#2563eb"/>
              </svg>
            </div>
            <h3>Real-time Processing</h3>
            <p>Process and analyze data in real-time for immediate action</p>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="footer-content">
          <p>&copy; 2023 Etalytics. All rights reserved.</p>
          <div class="social-links">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    /* Global Styles */
    :host {
      --primary-color: #2563eb;
      --secondary-color: #3b82f6;
      --accent-color: #1e40af;
      --text-color: #1f2937;
      --light-text: #f9fafb;
      --background-color: #ffffff;
      --section-bg: #f3f4f6;
      --border-radius: 8px;
      --transition-speed: 0.3s;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: var(--text-color);
      display: block;
      width: 100%;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Layout */
    .etalytics-welcome {
      max-width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: var(--background-color);
    }

    /* Header Styles */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 2rem;
      background-color: var(--background-color);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .logo-container {
      display: flex;
      align-items: center;
    }

    .logo {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-color);
      letter-spacing: -0.025em;
    }

    .navigation {
      display: flex;
      gap: 1.5rem;
    }

    .nav-item {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 500;
      transition: color var(--transition-speed);
      padding: 0.5rem 0;
    }

    .nav-item:hover {
      color: var(--primary-color);
    }

    /* Main Content */
    .main-content {
      flex: 1;
      padding: 2rem 0;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      padding: 4rem 2rem;
      border-radius: var(--border-radius);
      margin: 0 2rem 2rem 2rem;
      color: var(--light-text);
      text-align: center;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    .tagline {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 2rem;
      line-height: 1.4;
    }

    .cta-button {
      background-color: var(--light-text);
      color: var(--primary-color);
      border: none;
      padding: 1rem 2rem;
      font-size: 1.125rem;
      font-weight: 600;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: transform var(--transition-speed), box-shadow var(--transition-speed);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    /* Counter Section */
    .counter-section {
      background-color: var(--section-bg);
      padding: 3rem 2rem;
      margin: 2rem;
      border-radius: var(--border-radius);
      text-align: center;
    }

    .counter-container {
      max-width: 500px;
      margin: 0 auto;
    }

    .counter-container h3 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      color: var(--accent-color);
    }

    .counter-description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      color: var(--text-color);
    }

    .counter-display {
      background-color: var(--background-color);
      border-radius: var(--border-radius);
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    .counter-value {
      font-size: 3rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .counter-button {
      background-color: var(--primary-color);
      color: var(--light-text);
      border: none;
      padding: 1rem 2rem;
      font-size: 1.125rem;
      font-weight: 600;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: background-color var(--transition-speed);
    }

    .counter-button:hover {
      background-color: var(--accent-color);
    }

    /* Features Section */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 2rem;
      margin-bottom: 2rem;
    }

    .feature {
      background-color: var(--background-color);
      padding: 2rem;
      border-radius: var(--border-radius);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: transform var(--transition-speed);
      text-align: center;
    }

    .feature:hover {
      transform: translateY(-5px);
    }

    .feature-icon {
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: center;
    }

    .feature h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var (--primary-color);
    }

    .feature p {
      color: var(--text-color);
      line-height: 1.6;
    }

    /* Footer */
    .footer {
      background-color: var(--section-bg);
      padding: 2rem;
      margin-top: auto;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      color: var(--text-color);
      text-decoration: none;
      transition: color var(--transition-speed);
    }

    .social-link:hover {
      color: var(--primary-color);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        gap: 1rem;
      }
      
      .navigation {
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .title {
        font-size: 2rem;
      }
      
      .tagline {
        font-size: 1.25rem;
      }
      
      .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .features {
        grid-template-columns: 1fr;
      }
      
      .counter-value {
        font-size: 2.5rem;
      }
    }
  `],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  // Counter value that will be displayed and updated
  counter = 0;

  /**
   * Increments the counter by 1 when the button is clicked
   * This ensures the counter updates in real-time
   */
  incrementCounter(): void {
    this.counter = this.counter + 2;
  }
}
