require "kramdown"

module Jekyll
    class DocImg < Liquid::Tag
      def initialize(tag_name, img_path, tokens)
        super
        @img_path = img_path.strip
      end

      def render(context)
        # <<-MARKUP
        # 
        #   
        # </div><!-- box -->
        # MARKUP
        "<div class=\"box box--mutted\"><img src=\"#{@img_path}\" class=\"img-responsive center-block\"></div>"
      end
    end

    class CalloutBlock < Liquid::Block
      def initialize(tag_name, type, tokens)
        super
        @type = type
        @type = 'primary' if @type.empty?
      end

      def render(context)
        content = Kramdown::Document.new(super).to_html
        "<div class=\"bs-callout bs-callout-#{@type}\">#{content}</div>"
      end
    end

end

Liquid::Template.register_tag('doc_img', Jekyll::DocImg)
Liquid::Template.register_tag('callout', Jekyll::CalloutBlock)