import styles from "./IndexStyles";
import injectSheet from "react-jss";
import SimpleModalLauncher from "./SimpleModalLauncher/SimpleModalLauncher";

function App({ classes }) {
  return (
    <div className="App">
      <SimpleModalLauncher buttonLabel="Open text modal">
        <div className={classes.textModal}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus
            quam, sollicitudin posuere massa lacus cursus ligula. Quisque vel
            turpis a quam posuere lobortis. Aenean risus nunc, pretium eu massa
            tincidunt, dignissim tincidunt arcu. Integer et mauris vestibulum,
            pharetra eros nec, feugiat orci.
          </p>
        </div>
      </SimpleModalLauncher>

      <SimpleModalLauncher buttonLabel="Open image modal">
        <div className={classes.imageModal}>
          <img
            className={classes.imageInModal}
            src="https://placeimg.com/800/450/nature"
            alt="Nature"
          />
        </div>
      </SimpleModalLauncher>
    </div>
  );
}

export default injectSheet(styles)(App);
