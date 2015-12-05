module Jekyll
  class Youtube < Liquid::Tag

    def initialize(tag_name, pid, tokens)
      super
      @pid = pid
    end

    def render(context)
      %|<div class="embed-responsive embed-responsive-16by9">
          <iframe width="854" height="480" src="https://www.youtube.com/embed/#{@pid}" frameborder="0" allowfullscreen></iframe>
        </div>|
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::Youtube)