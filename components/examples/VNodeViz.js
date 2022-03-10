import { useState, useRef, useEffect } from 'react';
import { fromDomNodeToVNode, fromStringToDomNode } from 'million/shared';
import { highlight } from 'sugar-high';
import Wrapper from './Wrapper';

export default function VNodeViz() {
  const [html, setHtml] = useState('<div>Hello World</div>');
  const [vnode, setVNode] = useState(undefined);
  const inputRef = useRef();

  useEffect(() => {
    try {
      const node = fromStringToDomNode(html);
      if (html) setVNode(fromDomNodeToVNode(node));
      else setVNode('');
    } catch (e) {}
  }, [html]);

  return (
    <Wrapper>
      <pre>
        <textarea
          ref={inputRef}
          onInput={() => {
            setHtml(inputRef.current.value);
          }}
          value={html}
          style={{ background: 'transparent', width: '100%', height: '10vh' }}
        ></textarea>
      </pre>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html:
              vnode?.tag !== 'parsererror'
                ? highlight(JSON.stringify(vnode, null, 2) || '')
                : 'Error during parsing',
          }}
        ></code>
      </pre>
    </Wrapper>
  );
}
