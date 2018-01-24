import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from '@u-wave/react-youtube';
import {
  Spinner,
  TrainerAvatarBlock,
  AboutTrainer,
  TextBlockList,
  AchievementCardList,
} from 'Components';
import { connect } from 'react-redux';
import { aboutGetDataRequest } from '../../redux/actions/about';
import './About.scss';

class About extends Component {
  static propTypes = {
    aboutGetDataRequest: PropTypes.func.isRequired,
    data: PropTypes.shape({
      avatarBlock: PropTypes.object,
      aboutTrainer: PropTypes.arrayOf(PropTypes.object),
      aboutTextBlocks: PropTypes.arrayOf(PropTypes.object),
      trainerAchievements: PropTypes.arrayOf(PropTypes.object),
      videoId: PropTypes.string,
    }),
  };

  componentDidMount() {
    this.props.aboutGetDataRequest();
  };

  render() {
    if (this.props.data) {
      const {
        avatarBlock,
        aboutTrainer,
        aboutTextBlocks,
        trainerAchievements,
        videoId,
      } = this.props.data;

      return (
        <section className='about'>
          <div className='container'>
            <h1 className='caption'>Информация о тренере</h1>
            <div className='data-wrap'>
              <TrainerAvatarBlock
                  avatarSrc={avatarBlock.trainerAvatarSrc}
                  trainerName={avatarBlock.trainerName}
                  weightCategory={avatarBlock.trainerWeightCategory}
                  icons={avatarBlock.trainerSocialIcons} />
              <AboutTrainer paragrafs={aboutTrainer} />
            </div>
            <TextBlockList data={aboutTextBlocks} />
            <AchievementCardList achievements={trainerAchievements} />
            <YouTube video={videoId} className='video-about' />
          </div>
        </section>
      );
    } else {
      return (<Spinner />);
    }
  }
}

const mapStateToProps = state => ({
  data: state.aboutGetStaticData.data,
});

const mapDispatchToProps = dispatch => ({
  aboutGetDataRequest: () => dispatch(aboutGetDataRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);




// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import YouTube from '@u-wave/react-youtube';
// import { AchievmentItem, InfoField } from 'Components';
// import { aboutGetDataRequest } from '../../redux/actions/about';
// import './About.scss';
// import {
//   Divider,
//   Container,
//   List,
//   Segment,
//   Dimmer,
//   Loader,
//   Card,
//   Icon,
//   Image,
//   Button,
//   Header
// } from 'semantic-ui-react'
//
// class About extends Component {
//   static propTypes = {
//     aboutGetDataRequest: PropTypes.func.isRequired,
//     data: PropTypes.shape({
//       paragrafText: PropTypes.string,
//       imageSrc: PropTypes.string,
//       imageAlt: PropTypes.string,
//       videoId: PropTypes.string,
//     }),
//   };
//
//   componentDidMount() {
//     this.props.aboutGetDataRequest();
//   };
//
//   renderAchievments(achievments) {
//     return achievments.map((a, i) =>
//       <AchievmentItem key={i} img={a.img} title={a.title} date={a.date}/>)
//   };
//
//   renderParagraphs(paragraphs) {
//     return paragraphs.map((p, i) =>
//       <p key={i} className='paragraph'>{p}</p>)
//   };
//
//   renderSections(sections) {
//     return sections.map((s, i) =>
//       <Segment key={i}>
//         <Header as='h3'>{s.title}</Header>
//         {this.renderParagraphs(s.paragraphs)}
//       </Segment>);
//
//   };
//
//   render() {
//     if (this.props.data) {
//       const { title, info, sections, achievments, video } = this.props.data;
//       const { name, photo, sport, category, details } = info;
//
//       return (
//         <div className='page-wrapper about-wrapper'>
//           <h1 className='page-title'>{title}</h1>
//           <div className='page-content about-content'>
//             <div className='trainer-info'>
//               <Card>
//                 <Image src={photo}/>
//                 <Card.Content>
//                   <Card.Header>{name}</Card.Header>
//                   <Card.Meta>{sport} ({category})</Card.Meta>
//                 </Card.Content>
//                 <Card.Content extra>
//                   <Icon link name='facebook'/>
//                   <Icon link name='twitter'/>
//                   <Icon link name='instagram'/>
//                 </Card.Content>
//               </Card>
//               <Container className='details-info' text>
//                 <Header as='h3'>Основная информация</Header>
//                 {details.map((d, i) => <InfoField key={i} type={d.type} value={d.value}/>)}
//               </Container>
//             </div>
//
//             <section className='info-sections'>{this.renderSections(sections)}</section>
//             <section className='achievments'>
//               <Card.Group>
//                 {this.renderAchievments(achievments)}
//               </Card.Group>
//             </section>
//
//             <section className='video-section'>
//               <YouTube video={video} width='800' height='600' className='video' />
//             </section>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//       <Dimmer active inverted>
//         <Loader inverted content='Загрузка' />
//       </Dimmer>);
//     };
//   };
// };
//
// const mapStateToProps = state => ({
//   data: state.aboutGetStaticData.data,
// });
//
// const mapDispatchToProps = dispatch => ({
//   aboutGetDataRequest: () => dispatch(aboutGetDataRequest()),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(About);
