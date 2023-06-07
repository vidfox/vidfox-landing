/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button } from 'theme-ui';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Create client portal with No-Code
          </Heading>
          <Text as="p" variant="heroSecondary">
            Build, visualize, automate workflows, and design a path to guide clients through your processes, step-by-step.
          </Text>
          <Button variant="primary" style={{marginTop: "40px"}} onClick={() => window.open('https://calendly.com/vineetsri/15min')}>Request Access</Button>
          <div style={{marginTop: "10px", color: "#999"}} >
            <Text as="p">FrontBase is currently invite-only.</Text>
          </div>
        </Box>
        <Box sx={styles.banner.videoContainer}>
          <video autoPlay muted loop id="design-video" style={{ width: "100%", display: "inline" }}>
            <source src="https://res.cloudinary.com/ditoriefv/video/upload/v1686108273/klubmeet/swmqfy7dbfuajqgl0bvc.mp4" type="video/mp4" />
          </video>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    container: {
      minHeight: '70vh',
      padding: '100px 10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    videoContainer: {
      width: ['0%', '0%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'right',
      textAlign: 'right',
      mb: ['40px', null, null, null, null, 7],
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'left',
      textAlign: 'left',
      mb: ['40px', null, null, null, null, 7],
    },
  },
};
