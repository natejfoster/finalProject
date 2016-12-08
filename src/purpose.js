import React from 'react';
import './css/purpose.css';

var Purpose = React.createClass({
  render() {
    return(
      <div id='paragraph-section' className='purpose'>
        <p className='flow-text'>
          <h1>How The Echo Chamber is Created</h1>
          <p id='text'>
            While the internet allows us communicate with nearly whomever we want, it
            tends to divide into smaller groups of people who share simliar worldviews.
            These groups of people create echo chambers. Echo chambers are communities that
            affirm their own worldview while negating(?) other worldviews. People tends to divide into these groups because the people we know
            tend to have similar ideas as our own. But echo chambers are also created through social media.
            NPR argues that "algorithms, like the kind used by Facebook... often steer us toward articles
            that reflect our own ideological preferences, and search results usually echo what
            we already know and like."

            <a href="http://www.npr.org/sections/alltechconsidered/2016/07/24/486941582/the-reason-your-feed-became-an-echo-chamber-and-what-to-do-about-it ">
                (NPR) </a>
          </p>

        </p>
        <p className='flow-text'>
          <h1>Why We Need to Break the Echo Chamber</h1>
          <p id='text'>
            But these echo chambers cause many problems. If we are only exposed to ideas
            that we agree with then our ideas are never challenged, only confirmed.
            Orion Jones from Big Think writes that "sociologists have concluded that social
            media often entrench people's ideological
            positions and even make those positions more extreme. Witness the age of a bitterly
            divided America."

            <a href="http://bigthink.com/ideafeed/how-social-media-have-created-echo-chambers-for-ideas">
                (Big Think) </a>
          </p>
        </p>
        <p className='flow-text'>
          <h1>How Our Project Breaks the Echo Chamber</h1>
          <p id='text'>
            Our website takes Tweets about a topic from Twitter and sort them
            into two different opposing categories. The application will not filter information to the
            preferences of the users, but rather will give the user an accurate reflection
            of the diverse opinions held on Twitter. We hope that exposure to a wide range
            of ideas will help the user to have more informed conversations about these issues
            and will give users the information they need to more critically evaluate their
            own opinions. As a result, we hope that users will have a deeper understanding
            of the people around them and an increased awareness of the diversity of the world.
          </p>
        </p>

        <br/>

        <div id='bibliography-section'>
          <h1>Bibliography</h1>
          HOSANAGAR, KARTIK. "Blame the Echo Chamber on Facebook. But Blame Yourself, Too."
          Wired16 Nov. 2016, www.wired.com/2016/11/facebook-echo-chamber/. Accessed 8 Dec. 2016.
          <br/> <br/>
          JONES, ORION. "How Social Media Created an Echo Chamber for Ideas." big think
          bigthink.com/ideafeed/how-social-media-have-created-echo-chambers-for-ideas. Accessed 8 Dec. 2016.
          <br/> <br/>
          "The Reason Your Feed Became An Echo Chamber — And What To Do About It."
          NPR24 July 2016, www.npr.org/sections/alltechconsidered/2016/07/24/486941582/the-
          reason-your-feed-became-an-echo-chamber-and-what-to-do-about-it. Accessed 8 Dec. 2016.
          <br/> <br/>
        </div>
    </div>
    )
  }
})

export default Purpose;
