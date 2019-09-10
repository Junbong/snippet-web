/* External dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

/* Internal dependencies */
import SnippetPreview from '../../../storybook/SnippetPreview'
import Main from './Main'

storiesOf('Main', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const onSubmit = action('onSubmit')
    const submitting = boolean('submitting', false)
    const layout = object('layout', [
      {
        id: 'dropdown-top',
        type: 'dropdown',
        label: 'Select a fruit',
        error: 'Please select a fruit',
        items: [
          { id: 'apple', label: 'Apple' },
          { id: 'banana', label: 'Banana' },
          { id: 'limne', label: 'Limne' },
          { id: 'mango', label: 'Mango' },
          { id: 'peach', label: 'Peach' },
          { id: 'peach2', label: 'Peach2' },
          { id: 'peach12', label: 'Peach2' },
          { id: 'peach22', label: 'Peach2' },
          { id: 'peach32', label: 'Peach2' },
          { id: 'peach42', label: 'Peach2' },
          { id: 'peach25', label: 'Peach2' },
          { id: 'peach62', label: 'Peach2' },
          { id: 'peach26', label: 'Peach2' },
          { id: 'peach3', label: 'Peach3' },
          { id: 'peach4', label: 'Peach4' },
          { id: 'peach5', label: 'Peach5' },
          { id: 'cherry', label: 'Cherry' },
        ],
      },
      {
        id: 'image',
        type: 'image',
        url: 'https://http.cat/200',
      },
      {
        id: 'text-1',
        type: 'text',
        text: 'Channel.io',
        style: 'h1',
        color: 'highlited',
      },
      {
        id: 'text-2',
        type: 'text',
        text: 'Live Chat and Team Communication',
        style: 'h2',
        color: 'success',
      },
      {
        id: 'text-3',
        type: 'text',
        text: 'Don’t lose your website customers Use Channel, the messenger for customer acquisition',
      },
      {
        id: 'divider-1',
        type: 'divider',
      },
      {
        id: 'key-value',
        type: 'key-value',
        items: [
          {
            key: 'Plugin',
            value: 'channel.io',
          },
          {
            key: 'Trigger',
            value: 'PushBot',
          },
          {
            key: 'Category',
            value: 'Enhancements',
          },
        ],
      },
      {
        id: 'divider-2',
        type: 'divider',
      },
      {
        id: 'list',
        type: 'list',
        items: [
          {
            id: 'list-item-1',
            title: 'Channel.io',
            description: 'Live Chat and Team Communication',
            image: 'https://http.cat/200',
            action: {
              type: 'url',
              url: 'https://channel.io',
            },
          },
          {
            id: 'list-item-2',
            title: 'Walkinsights',
            description: 'Offline Customer Analytics',
            image: 'https://http.cat/418',
            action: {
              type: 'url',
              url: 'https://walkinsights.com',
            },
          },
          {
            id: 'list-item-3',
            title: 'Sutmit Item',
            description: 'Submit form values',
            image: 'https://http.cat/204',
            action: {
              type: 'submit',
            },
          },
        ],
      },
      {
        id: 'input',
        type: 'input',
        label: 'name',
        value: 'channel.io',
        placeholder: 'Please enter your name',
      },
      {
        id: 'dropdown-bottom',
        type: 'dropdown',
        label: 'Select a fruit',
        items: [
          { id: 'apple', label: 'Apple' },
          { id: 'banana', label: 'Banana' },
          { id: 'limne', label: 'Limne' },
          { id: 'mango', label: 'Mango' },
          { id: 'peach', label: 'Peach' },
          { id: 'cherry', label: 'Cherry' },
        ],
      },
      {
        id: 'submit-button',
        type: 'button',
        label: 'submit',
        action: {
          type: 'submit',
        },
      },
    ])

    return (
      <SnippetPreview>
        <Main
          layout={layout}
          onSubmit={onSubmit}
          submitting={submitting}
        />
      </SnippetPreview>
    )
  })
