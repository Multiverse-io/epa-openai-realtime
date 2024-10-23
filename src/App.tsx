import {
  BookIcon,
  HeartIcon,
  HomeIcon,
  LogoName,
  Navigation,
} from '@multiverse-io/stardust-react';
import './App.scss';
import EPAPracticeList from './components/EPAPracticeList';
import { ksbList } from './utils/ksbList';

function App() {
  return (
    <div data-component="App">
      <Navigation.Root>
        <Navigation.Menu renderLogo={() => <LogoName />}>
          <>
            <Navigation.MenuGroup>
              <Navigation.MenuGroupHeading>General</Navigation.MenuGroupHeading>
              <Navigation.MenuItem
                renderIcon={(iconProps: Navigation.MenuItemIconProps) => (
                  <HomeIcon {...iconProps} />
                )}
                href={`/`}
                active={false}
              >
                Home
              </Navigation.MenuItem>
              <Navigation.MenuItem
                renderIcon={(iconProps: Navigation.MenuItemIconProps) => (
                  <HeartIcon {...iconProps} />
                )}
                href={`/`}
                active={false}
              >
                Community
              </Navigation.MenuItem>

              <Navigation.MenuGroupHeading>
                Data Fellowship
              </Navigation.MenuGroupHeading>
              <Navigation.MenuItem
                href={`/`}
                renderIcon={(iconProps: Navigation.MenuItemIconProps) => (
                  <BookIcon {...iconProps} />
                )}
                active={true}
              >
                Portfolio & EPA
              </Navigation.MenuItem>
            </Navigation.MenuGroup>
          </>
        </Navigation.Menu>
        <Navigation.PageContent>
          <EPAPracticeList ksbList={ksbList} />
        </Navigation.PageContent>
      </Navigation.Root>
    </div>
  );
}

export default App;
