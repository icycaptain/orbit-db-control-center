import React, { useEffect } from 'react'
import { majorScale, Heading, Pane, Spinner } from 'evergreen-ui'
import { useLocation, Redirect } from 'react-router-dom'
import { useStateValue, actions, loadingState } from '../state'

import ProgramList from '../components/DatabaseList'

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

function SearchResultsView () {
  const [appState, dispatch] = useStateValue()

  const query = useQuery().get('q')
  const queryOk = query.length >= 1

  if (!queryOk) return <Redirect to='/' />

  let programs = appState.programs
  if (query) {
    programs = programs.filter(({ payload: { value: { name, type, address } } }) =>
      name.includes(query) || type.includes(query) || address.toString().includes(query)
    )
  }

  return (
    <Pane display='flex' justifyContent='center'>
      <Pane
        flex='1'
        elevation={1}
        background='white'
        margin={majorScale(6)}
        padding={majorScale(4)}
      >
        <Pane borderBottom='default'>
          <Heading size={600} marginBottom={majorScale(1)}>
            {programs.length} programs found
          </Heading>
        </Pane>
        {programs !== loadingState ? <ProgramList programs={programs} /> : <Spinner marginX='auto' marginY={120} />}
      </Pane>
    </Pane>
  )
}

export default SearchResultsView
