import mongoose from 'mongoose';

const aboutSchema = mongoose.Schema({
  avatarBlock: {
    trainerAvatarSrc: String,
    trainerName: String,
    trainerWeightCategory: String,
    trainerSocialIcons: [
      {
        id: String,
        data: String,
      },
    ],
  },

  aboutTrainer: [
    {
      id: String,
      fieldName: String,
      fieldNameData: String,
    },
  ],

  aboutTextBlocks: [
    {
      id: String,
      header: String,
      data: [
        {
          id: String,
          paragraf: String,
        },
      ],
    },
  ],

  trainerAchievements: [
    {
      id: String,
      data: {
        imgSrc: String,
        headerText: String,
        dateText: String,
      },
    },
  ],

  videoId: String,
});

aboutSchema.statics.findContentAbout = function (callback) {
  return this.find({}, callback);
};

export default mongoose.model('About', aboutSchema);
