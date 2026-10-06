{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = [ pkgs.python3 pkgs.python3Packages.pip pkgs.git ];

  shellHook = ''
    export LD_LIBRARY_PATH=${pkgs.stdenv.cc.cc.lib}/lib:$LD_LIBRARY_PATH
    if [ ! -d .venv ]; then
      python -m venv .venv
    fi
    source .venv/bin/activate
    pip install -r requirements.txt --quiet
  '';
}
