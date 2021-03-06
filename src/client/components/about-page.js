
import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Feedback from './feedback.js'
import * as actions from '../actions';


class AboutPage extends React.Component {
  render(){
    return (
      <div id="about" className="table">

        <div id="summary" className="row">

          <div id="summary-header" className="col-xs-12">

            <h1>NLP ME</h1>

            <p>
              Welcome to NLP ME, a place where you can "chat" with natural language processing APIs.
            </p>

          </div>

          <div id= "summary-body" className="col-xs-12">
            <h4>What is natural language processing?</h4>

            <p>
              Natural language processing is a subfield of artifical intelligence that involves extracting meaning from text and spoken language. These days NLP is being adopted by companies to analyze all sorts of data from their customers. A company, for instance, might use NLP to analyze tweets with their hashtag to see if people are saying good or bad things about their product.
            </p>

            <h4>What is an API?</h4>

            <p>
              An API, or an application programming interface, is a connection through which different pieces of software communicate. The APIs featured on this site are provided as a service for applications that need to analyze text with NLP. The APIs take in text and give back NLP analysis.
            </p>

            <h4>What is this website?</h4>

            <p>
              This is a web application that allows you to see what kind of data NLP APIs can extract from text. <a href="#/chat">Chat</a> with any of the APIs listed below to see what they can figure out about your input!
            </p>

          </div>

        </div>


        <div id="apis">

          <div className="row">
            <h3>APIs on this Site</h3>
          </div>

          <div className="row" id="top-api-row">
            <div className="col-xs-12 col-sm-6 aylien api-container">

              <div className="api-header">
                <img src="images/aylien-icon.png" />
                <div id="aylien-logo-text">AYLIEN</div>
              </div>

              <div className="api-analyses">

                <h4>Analyses on this site.</h4>

                <b>Classify Analysis</b>
                <p>
                  Extracts categories from your input.
                </p>

                <b>Sentiment Analysis</b>
                <p>
                  Detects the polarity (positive or negative) and the subjectivity of your input.
                </p>

                <b>Concepts Analysis</b>
                <p>
                  Extracts concepts from your input.
                </p>

                <b>Hashtags Analysis</b>
                <p>
                  Extracts hashtags from your input.
                </p>

              </div>

              <div className="api-brand">
                <h5>Connect with Aylien!</h5>
                <div className="image-container">
                  <a href="http://aylien.com/" target="_blank"><img src="images/aylien-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://www.facebook.com/aylieninc" target="_blank"><img src="images/facebook-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://twitter.com/_aylien" target="_blank"><img src="images/twitter-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://plus.google.com/+Aylien" target="_blank"><img src="images/googleplus-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://github.com/AYLIEN" target="_blank"><img src="images/github-icon.png"/></a>
                </div>
              </div>

            </div>

            <div className="col-xs-12 col-sm-6 meaningcloud api-container">

              <div className="api-header">
                <img src="images/meaningcloud-logo.png"/>
              </div>

              <div className="api-analyses">

                <h4>Analyses on this site.</h4>

                <b>Classification Analysis</b>
                <p>
                  Extracts categories from your input.
                </p>

                <b>Sentiment Analysis</b>
                <p>
                  Rates the polarity (positive or negative), subjectivity, irony, and emotional agreement of your input.
                </p>

                <b>Topics Analysis</b>
                <p>
                  Extracts topics from your input.
                </p>

              </div>

              <div className="api-brand">
                <h5>Connect with Meaning Cloud!</h5>
                <div className="image-container">
                  <a href="https://www.meaningcloud.com/" target="_blank"><img src="images/meaningcloud-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://www.facebook.com/MeaningCloud" target="_blank"><img src="images/facebook-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://twitter.com/MeaningCloud" target="_blank"><img src="images/twitter-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://plus.google.com/+MeaningCloudAPI" target="_blank"><img src="images/googleplus-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://www.linkedin.com/company/meaningcloud" target="_blank"><img src="images/linkedin-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://www.youtube.com/channel/UCxZ5HyouT_xttwGDdCCoKzg" target="_blank"><img src="images/youtube-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://github.com/MeaningCloud" target="_blank"><img src="images/github-icon.png"/></a>
                </div>
              </div>

            </div>

          </div>

          <div className="row">


            <div className="col-xs-12 col-sm-6 rosette api-container">

              <div className="api-header">
                <img src="images/rosette-logo.png"/>
              </div>

              <div className="api-analyses">

                <h4>Analyses on this site.</h4>

                <b>Categories Analysis</b>
                <p>
                  Extracts categories from your input.
                </p>

                <b>Entities Analysis</b>
                <p>
                  Extracts entities from your input.
                </p>

                <b>Sentiment Analysis</b>
                <p>
                  Rates the sentiment of your input overall and the sentiment of each entity detected in your input.
                </p>

                <b>Relationships Analysis</b>
                <p>
                  Detects relationships between different entities in your input.
                </p>

              </div>

              <div className="api-brand">
                <h5>Connect with Rosette!</h5>
                <div className="image-container">
                  <a href="https://rosette.com/" target="_blank"><img src="images/rosette-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://twitter.com/rosetteapi" target="_blank"><img src="images/twitter-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://www.linkedin.com/company/basis-technology" target="_blank"><img src="images/linkedin-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://github.com/rosette-api" target="_blank"><img src="images/github-icon.png"/></a>
                </div>
              </div>

            </div>

            <div className="col-xs-12 col-sm-6 indico api-container">

              <div className="api-header">
                <img src="images/indico-logo.png"/>
              </div>

              <div className="api-analyses">

                <h4>Analyses on this site.</h4>

                <b>Text Tags Analysis</b>
                <p>
                  Rates the correlation of your input with 111 text tags (similar to categories).
                </p>

                <b>Sentiment Analysis</b>
                <p>
                  Rates how positive or negative your input is.
                </p>

                <b>Personality Analysis</b>
                <p>
                  Rates how strongly your input expresses openness, extraversion, agreeableness, and conscientiousness.
                </p>

                <b>People Analysis</b>
                <p>
                  Detects people referenced in your input.
                </p>

                <b>Political Analysis</b>
                <p>
                  Rates how much your input leans toward liberal, green, conservative, and libertarian political affiliations.
                </p>

                <b>Emotion Analysis</b>
                <p>
                  Rates how much your input expresses anger, joy, fear, surprise, and sadness.
                </p>

              </div>

              <div className="api-brand">
                <h5>Connect with Indico!</h5>
                <div className="image-container">
                  <a href="https://indico.io/" target="_blank"><img src="images/indico-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://www.facebook.com/indicoDataSolutions" target="_blank"><img src="images/facebook-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://twitter.com/indicodata" target="_blank"><img src="images/twitter-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://www.instagram.com/indicodata/" target="_blank"><img src="images/instagram-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://www.youtube.com/channel/UCGuUwm6PaPkeftGFmNOfTHw" target="_blank"><img src="images/youtube-icon.png"/></a>
                </div>
                <div className="image-container">
                  <a href="https://github.com/IndicoDataSolutions" target="_blank"><img src="images/github-icon.png"/></a>
                </div>
              </div>

            </div>

          </div>



          <div className="col-xs-12" id="api-disclaimer">
            <h6>
              * Each of these APIs is great and offers a free account for anyone wanting to experiment with their services. Each offers different types of NLP analysis, and each has additional analyses not featured on this site.
            </h6>
          </div>

        </div>


        < Feedback
          updateFeedback={this.props.actions.updateFeedback}
          sendFeedback={this.props.actions.sendFeedback}
          feedback={this.props.feedback}
        />


      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)
