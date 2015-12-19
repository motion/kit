view Main {
  <ModalExample />
  <ButtonExample />
  <CardExample />
  <CardExample />

  $ = {
    flexFlow: 'row'
  }
}

view ModalExample {
  let active = false

  let handleToggle = () => {
    active = !active
  }

  let actions = [
    { label: "Cancel", onClick: handleToggle },
    { label: "Save", onClick: handleToggle }
  ];

  <Button label='Show my dialog' onClick={handleToggle}>
    Show Modal
  </Button>
  <Modal
    actions={actions}
    active={active}
    title='My awesome dialog'
    onOverlayClick={handleToggle}
  >
    <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
  </Modal>
}

view CardExample {
  <Card>
    <Card.Title
      title="Hello World"
      subtitle="Subtitle here"
      // avatar="https://placeimg.com/80/80/animals"
    />
    <Card.Media
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Card.Text>
  </Card>

  $Card = {
    width: 350
  }
}

view GithubIcon {
  <svg viewBox="0 0 284 277">
    <g><path d="M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555" /></g>
  </svg>
}

view ButtonExample {
  <Button href='http://github.com/javivelasco' target='_blank' raised>
    <GithubIcon /> Github
  </Button>
  <Button icon='bookmark' label='Bookmark' accent />
  <Button icon='bookmark' label='Bookmark' raised primary />
  <Button icon='inbox' label='Inbox' flat />
  <Button icon='add' floating />
  <Button icon='add' floating accent mini />
  <IconButton icon='favorite' accent />
  <IconButton primary><GithubIcon /></IconButton>
  <Button icon='add' label='Add this' flat primary />
  <Button icon='add' label='Add this' flat disabled />
}