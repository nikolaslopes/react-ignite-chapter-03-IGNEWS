import { fireEvent, render, screen } from '@testing-library/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { SubscribeButton } from '.'
import { userAuthenticatedMock } from '../../tests/mocks/userSession'

jest.mock('next-auth/react')
jest.mock('next/router')

describe('SubscribeButton component', () => {
  it('renders correctly when user is NOT authenticated', () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated',
    })

    render(<SubscribeButton />)

    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when NOT authenticated', () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValue({
      data: null,
      status: 'unauthenticated',
    })

    const signInMocked = jest.mocked(signIn)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects to posts when user already HAS a subscription', () => {
    const useRouterMocked = jest.mocked(useRouter)
    const useSessionMocked = jest.mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce(userAuthenticatedMock)

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalledWith('/posts')
  })
})
