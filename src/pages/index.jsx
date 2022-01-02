import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Wrapper from "./_wrapper"

const IndexPage = () => {
  return (
    <Wrapper>
      <main>
        <div className="businessCardContainer">
          <div className="businessCard">
            <div className="row">
              <div className="profilePic">
                <StaticImage  src="../images/profile.jpeg" 
                              alt="Anssi Hautaviita"
                              placeholder="tracedSVG"
                              layout="fixed"
                              width={96}
                              height={96}
                              imgStyle={{
                                borderRadius: "50%",
                              }}
                              
                />
              </div>
              <div className="otherContent">
                <h1>Anssi Hautaviita</h1>
                <p className="underTitle">Web Developer, SEO & Marketing Automation specialist</p>
                <div className="hideMobile">
                  <Contact />
                </div>
              </div>
            </div>
            <div className="displayMobile">
              <Contact />
            </div>
            <h2>Services</h2>
            <div className="services">
              <span className="service">Websites</span>
              <span className="service">Web&nbsp;applications</span>
              <span className="service">Marketing&nbsp;automation&nbsp;setups</span>
              <span className="service">Search&nbsp;Engine&nbsp;Optimization</span>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>
          This website does not store any cookies or other data to your device.
        </div>
      </footer>
    </Wrapper>
  )
}

const Contact = () => (
  <>
    <p><span className="icon">@</span>anssi.hautaviita@gmail.com</p>
    <p><span className="icon text">li</span><a href="https://www.linkedin.com/in/ahautaviita/" target="_blank" rel="noreferrer">linkedin.com/in/ahautaviita/</a></p>
    <p><span className="icon text">Y</span>3212939-4 (ATK-Anssi Oy)</p>
  </>
)

export default IndexPage
