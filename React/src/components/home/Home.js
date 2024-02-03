import React, { useEffect, useState } from 'react'
import { Statistic, Icon, Grid, Container, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { orderApi } from '../service/OrderApi'
import { handleLogError } from '../service/Helpers'
import Navbar from '../service/Navbar'

function Home() {
  const [numberOfUsers, setNumberOfUsers] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    async function fetchData() {
      try {
        const responseUsers = await orderApi.numberOfUsers()
        const numberOfUsers = responseUsers.data
        setNumberOfUsers(numberOfUsers)
        alert("HOLA MUNDO")
      } catch (error) {
        handleLogError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <Segment basic style={{ marginTop: window.innerHeight / 2 }}>
        <Dimmer active inverted>
          <Loader inverted size='huge'>Loading</Loader>
        </Dimmer>
      </Segment>
    )
  }

  return (
    <Container text>
      <Navbar />
    
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Segment color='violet'>
              <Statistic>
                <Statistic.Value><Icon name='user' color='grey' />{numberOfUsers}</Statistic.Value>
                <Statistic.Label>Users</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Home