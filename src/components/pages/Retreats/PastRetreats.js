import React from 'react';
import styled from 'styled-components'
import Retreat2018 from './Retreat2018'
import Retreat2019 from './Retreat2019'

const Container = styled.div`
margin-bottom: 40px;
`
export default () => (
  <section>
    <Container id="2019">
      <Retreat2019 />
    </Container>
    <Container id="2018">
      <Retreat2018 />
    </Container>
  </section>
)




