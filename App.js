import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Video } from 'expo';

const images = [
  "https://d301468hdcm00e.cloudfront.net/cce71941eb82ac08759e0f0cd1052eaf_video-file.png",
  "https://d301468hdcm00e.cloudfront.net/eb037f1ffa2d70c821793962ae7f3893_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/fe61fae487d9bb1abb672e390c137f0a_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/21d59ee6577782b0f9fce2254d3fa321_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/4d316b9ea2e682b2e9d5f6dbff074fe7_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/bb17d6dd014a91d67a4c11529874b25e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/4ea7e227c477b7c40063b16fc52c4047_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/b575f7c440732c55f785059bd428a769_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/d07949ec72a3a0351c0047b4f74420d8_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/be68a2cd2fbe5ff4e5ccb741ec5cfb0f_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/655b99b40128f9b40e511cd0f84f097f_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/b57edfe042a5bb8366672ffbb0783539_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/6e65fe0fffbbfeaf700f5e067cf412dd_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/9b8edc114fd1472ef1177a19d13e6218_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/f1b9287971cc07642329bc759b380446_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/18dc3dd9e430ba1575aebaf72307978d_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/a0e3fff4956145b1a9b3f90ab4502a33_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/be3f5e12a86a7119d9aa3cef9e6e551f_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/e777dadd4ec4925084148635a8da84cd_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/ee143260ed53ccbf09eb1ddf9d07f241_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/fd8ee73a45d931ba11b5da5b192ec2bb_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/bd99df637237267580b8c9034d5f557f_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/2b4a793325ca76a72e47dcbd93697a65_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/eee1f2a2009db27c846940eb86137bb4_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/6508a56e24f9341f08dbfc4f8d22b919_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/03a02d7cfe272d807d731da00710a357_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/6a657afc87434eacc603b49de7fe5fba_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/b3edfbdf7276c3560dc3e293976986c5_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/0a7840e058b5aa96db969081284a8c05_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/761d107b61fd9fbaca4dfe11cce0d040_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/bcd109db9e652208487c8dd5df61bce0_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/26ef17691c4860096a3e5dfaf74dfd59_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/9a2775589197620fe356bdc413260eba_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/79846b9dfdd3a2d7e537b690759f3a86_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/c7acbb527984ce81145267690ed2c892_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/4cea72399d9de87ce7bbc885842bd26e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/ff12987c6ddb0dba0b86335544e2819e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/01dc15ddee11ddaf533b0f3b4234ab7e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/41d223a280ee93e17204b104341e9008_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/b82bb3a8d8b80b624960cb91efa93ef3_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/4bfc2219b0d73142ca2b7157a7c6fc31_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/91dcbf268ecdca69925ecb49b8e373e6_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/7cca7994d36b31688da162fd86dc9bd5_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/2bf2e39e0c58a0b1b8a5fc2516242611_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/a7d59857fb34b56bbe13b1d5812629f0_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/27b5ecc3f96e3f2356d88071aa6c1bdd_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/620467c8d92609182361d148345c260f_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/9575cf5cf355de2e6ef2f23f02c8bae2_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/cb2eca2d89b229aff05c0ddbd866749e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/15d3a4ddb75caa365d37938ee67b68be_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/7ec5bb3cf108c4ed7a6c4ef9011d71e2_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/872625c27acad9f54fb0143bd6a24d85_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/8b45155e982fe1dd274b2c34055b425e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/b4ca85a41ac9437fdbb5e5e9919bc9d3_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/e67299c6d8f5a2e4236409038d067320_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/53c17bc4ef51c5a88af5b9348fbd9699_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/29c5a29d54788ce6766c79e2faf53998_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/86117df5913b17e728ae94a441163cab_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/063aace8eff8ec68ff2fa8fab1b2e350_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/b1f8e3a2d4fdf6c6e03569f56c602686_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/6b0156491539e9a72b0eccb9d80685b1_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/c162ab8b459fa9da12261e9fae5c3f80_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/985e4c4676be7c1b1d02ded514994b19_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/d2a2c462da0da55bcb26ce775ed95891_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/7333448ad4a8c98efd0e03eda924df58_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/8b7b9894fee44b15acb8917fbb48f2eb_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/820b21733ca6091b61fa0bb9d33b9e79_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/70a09ada579de824b1c81be13c0ebdb1_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/e14c4192198a99ac1ab39975f512e56c_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/6be306af38dde84d258801d630758fe8_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/240af802d4e6627ceba2eb3020ed1ec9_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/2d26f3d8b1e390d9d5682164fe2d5094_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/b1b10ea73b6113623d62531b536246da_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/daa8948da075ffffad40d7256e05c089_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/3d9f60626d358d68f95d1be19209fc45_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/83188ab064ef764c9a9a0cb643b9a3e7_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/c401c0bfedfe6a0b4515dea53eeb7d4c_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/3f94434a8ad72dba4156962132bafe44_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/d1488736aced7845f621443f9b2b8f0e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/9da2b7a4987582ac4259db0c23876b17_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/7618ef478fa9bf25a56844a73b5f92c8_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/6c0e0db86d94fe1d8b8fc1e18c384042_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/54ba9807386dcb48fdef4af278bd6e87_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/2090c6b6aae9346d62dfbff8fd1ca15d_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/b9e54c60e0ef10dca356265f68f1a680_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/93579efc6b4f7b82edf74df370948e09_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/d7564e1a1c34ebb287096ad92ca0728e_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/efe1244f004cb89d4e8b7a897dbe96e6_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/34adbb23d057a8b76406f43a32b7781f_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/4f8745469c320ae20dc1075c4b2b35ba_video-thumbnail-file.jpeg",
  "https://d301468hdcm00e.cloudfront.net/05656ccec7c7fa2949fb860171fccee7_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/746d4d577fb965573d440210ce4dda13_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/e4786fb6bca5f3d1d01c862feb94eefa_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/aa71d06f69daddd4e9bc3ca003231caf_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/6dd015aabbecbf93ea7628a63b544b94_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/1ded32bbdd5f6f371cf32ee6ae31b399_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/27caff6c79562c5160d7f44728b370cd_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/048dd65f42d6f61f69a482f7c3c9ac6e_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/d5e870a4e713d759fd436a5dbf9db925_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/7958c8af4cf94e93ca9887bef3f775cb_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/c13ec61ef5abc3bf26cea3c8197d9709_4811a3440a1c04c60ad9c5eddc7bcf8d_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/4421bb27e3aeecf74f65f6b9269ff78d_Screen%20Shot%202018-08-29%20at%202.26.19%20PM.png",
  "https://d301468hdcm00e.cloudfront.net/40bbf507120de434fb53711998220c5c_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/2e1e0c4f7a302472cb46afb074b21e0a_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/ed25957da9549d57b924a9a792db2963_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/dd231e317bbf38aa0425f4cf9b597f64_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/f78e67058417c73c92534cab47131c1a_thumbnail.png",
  "https://d301468hdcm00e.cloudfront.net/342245b72d9a9bcc8b70e250c82b9919_thumbnail-file",
  "https://d301468hdcm00e.cloudfront.net/e37326aa90fbe10dc5e27df510a7f980_thumbnail-file"
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
        />
        {images.map((image,index) => 
          <Image style={{ width: 1, height: 1}} source={{ uri: image }} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
