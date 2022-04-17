import React from 'react';
import { Message } from './Message/Message'
import { Chat } from './Chat'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'


describe('Message', (props) => {
    it('render component with snapshot', () => {
        render(<Chat {...props}/>)
    })
})
