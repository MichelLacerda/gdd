# godotbr
Godot BR (pt_BR)

### Ubuntu 14.04.3 LTS 

* Ruby 2
* RubyGems 2.1

```sh
  # apt-get install curl git-core build-essential zlib1g-dev libssl-dev libreadline-dev
```

Download Ruby2.2 and RubyGems 2.1
```sh
  $ wget http://ftp.ruby-lang.org/pub/ruby/ruby-2.2.4.tar.gz
  $ wget http://production.cf.rubygems.org/rubygems/rubygems-2.1.11.tgz
  
  
```

Building Ruby
```sh
  $ tar xvzf ruby-2.2.4.tar.gz
  $ cd ruby-2.2.4
  
  $ ./configure
  $ make
  $ sudo make install 
```

Building RubyGems
```sh
  $ tar xvzf rubygems-2.1.11.tgz
  $ cd rubygems-2.1.11
  
  $ ./configure
  $ make
  $ sudo make install
```
