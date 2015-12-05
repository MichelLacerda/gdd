module Jekyll
  module Thumbnail
    def thumbnail_url(input, abs_url, image, width, height)
      %|<img src="#{abs_url}/#{image}" alt="#" class="thumbnail"></a>|
    end
  end
end

Liquid::Template.register_filter(Jekyll::Thumbnail)