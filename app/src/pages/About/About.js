import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from '@u-wave/react-youtube';
import { Spinner } from 'Components';
import { connect } from 'react-redux';
import { pageAboutGetDataRequest } from '../../redux/actions/page_About';
import './About.scss';
import { Container, List, Segment, Dimmer, Loader, Card, Icon, Image, Button, Header } from 'semantic-ui-react'

class About extends Component {
  static propTypes = {
    pageAboutGetDataRequest: PropTypes.func.isRequired,
    data: PropTypes.shape({
      paragrafText: PropTypes.string,
      imageSrc: PropTypes.string,
      imageAlt: PropTypes.string,
      videoId: PropTypes.string
    })
  }

  componentDidMount() {
    this.props.pageAboutGetDataRequest();
  }

  renderParagraphs(paragraphs) {
    return paragraphs.map((p, i) =>
      <p className='paragraph'>{p}</p>)
  }

  renderSections(sections) {
    return sections.map((s, i) =>
      <Segment key={i}>
        <Header as='h3'>{s.title}</Header>
        {this.renderParagraphs(s.paragraphs)}
      </Segment>)

  }

  render() {
    if (this.props.data) {
      const { title, trainerInfo, sections } = this.props.data;
      const {
        name,
        photo,
        sport,
        category,
        growth,
        birth,
        competitiveWeight,
        offSeasonWeight,
        description
      } = trainerInfo

      return (
        <section className='page-wrapper about-wrapper'>
          <Header as='h1' textAlign='center'>{title}</Header>
          <div className='page-content about-content'>
            <div className='trainer-info'>
              <Card>
                <Image src={photo} />
                <Card.Content>
                  <Card.Header>{name}</Card.Header>
                  <Card.Meta>{sport} ({category})</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Icon link name='facebook'/>
                  <Icon link name='twitter'/>
                  <Icon link name='instagram'/>
                </Card.Content>
              </Card>
              <Segment compact floated='right'>
                <Container text>
                  <Header as='h3'>Основная информация</Header>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eos?</p>
                </Container>
              </Segment>
            </div>
            <div className='info-sections'>{this.renderSections(sections)}</div>
          </div>
        </section>
      )
    } else {
      return (
      <Dimmer active inverted>
        <Loader inverted content='Загрузка' />
      </Dimmer>);
    }
  }
}

const mapStateToProps = state => ({
  data: state.pageAboutGetStaticData.data
});

const mapDispatchToProps = dispatch => ({
  pageAboutGetDataRequest: () => dispatch(pageAboutGetDataRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
