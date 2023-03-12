import { component$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { server$ } from '@builder.io/qwik-city';
import { foo } from '~/utils/foo';


export const fooItToIt = server$(async () => {
  foo();
});


export default component$(() => {
  return (
    <div>
      <h1>Server-side code not executing latest recompiled code.</h1>
      <ol>
        <li>Click button</li>
        <li>Edit foo and save</li>
        <li>Click button</li>
        <li>Check server-side console</li>
      </ol>
      <button onClick$={() => fooItToIt()}>Click me once, Click me twice!</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
