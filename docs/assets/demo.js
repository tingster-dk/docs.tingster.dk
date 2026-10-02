/**
 * Live widget previews for the docs.
 *
 * Markdown shape:
 *
 *   <div class="widget-demo" data-widget-demo="grid"></div>
 *
 *   ```html
 *   <script src="https://shop.tingster.dk/embed.js" data-tingster-widget="grid"></script>
 *   ```
 *
 * The snippet in the code block is the single source of truth: this file reads it back out of
 * the rendered page and runs it inside the box above, so the preview and the code the reader
 * copies can never drift apart.
 */
(function () {
  'use strict';

  var RENDERED = 'data-demo-rendered';

  /** The code block a demo box is paired with: its next element sibling. */
  function snippetFor(box) {
    var next = box.nextElementSibling;
    var code = next && next.querySelector ? next.querySelector('code') : null;
    return code ? code.textContent : null;
  }

  /**
   * <script> elements created by innerHTML never execute — the HTML parser marks them
   * already-started. Rebuild each one as a fresh element so the browser fetches and runs it.
   */
  function runSnippet(box, html) {
    var staging = document.createElement('div');
    staging.innerHTML = html;

    var scripts = staging.querySelectorAll('script');
    for (var i = 0; i < scripts.length; i++) {
      var source = scripts[i];
      var script = document.createElement('script');
      for (var a = 0; a < source.attributes.length; a++) {
        var attribute = source.attributes[a];
        script.setAttribute(attribute.name, attribute.value);
      }
      script.text = source.text;
      script.onerror = function () { fallback(box); };
      source.parentNode.replaceChild(script, source);
    }

    while (staging.firstChild) {
      box.appendChild(staging.firstChild);
    }
  }

  function fallback(box) {
    if (box.querySelector('.widget-demo__note')) return;
    var note = document.createElement('p');
    note.className = 'widget-demo__note';
    note.textContent =
      'Preview unavailable — shop.tingster.dk could not be reached from here. ' +
      'The snippet below is still correct.';
    box.appendChild(note);
  }

  function render(box) {
    if (box.getAttribute(RENDERED) === '1') return;

    var html = snippetFor(box);
    if (!html) return;

    box.setAttribute(RENDERED, '1');
    runSnippet(box, html);

    // embed.js replaces its own tag with an iframe synchronously once it loads. If nothing
    // has appeared by then, say so rather than leaving an empty frame.
    window.setTimeout(function () {
      if (!box.querySelector('iframe')) fallback(box);
    }, 6000);
  }

  function renderAll() {
    var boxes = document.querySelectorAll('[data-widget-demo]');
    for (var i = 0; i < boxes.length; i++) {
      render(boxes[i]);
    }
  }

  // Material's instant navigation swaps the page body without a reload, so hook its
  // document observable when it exists and fall back to the plain load event when it doesn't.
  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(renderAll);
  } else if (document.readyState !== 'loading') {
    renderAll();
  } else {
    document.addEventListener('DOMContentLoaded', renderAll);
  }
})();
