Build the compiler
~~~~~~~~~~~~~~~~~~

The development of BuckleScript compiler relies on 2 tools which are
readily available in ``opam`` and work with our patched OCaml compiler:
-
`ocamlbuild <http://caml.inria.fr/pub/docs/manual-ocaml-400/manual032.html>`__:
Default build tool for OCaml project -
`camlp4 <https://github.com/ocaml/camlp4>`__: Tool used to generate
OCaml code for processing large AST. (j.ml file).

After having installed the above dependencies from opam you can run the
following:

.. code:: sh

    cd jscomp/
    ./build.sh

Build the runtime
~~~~~~~~~~~~~~~~~

.. code:: sh

    cd ./runtime; make all

Build the stdlib
~~~~~~~~~~~~~~~~

.. code:: sh

    cd ./stdlib; make all

