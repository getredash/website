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

end

Liquid::Template.register_tag('doc_img', Jekyll::DocImg)