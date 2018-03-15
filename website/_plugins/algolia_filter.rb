class AlgoliaSearchJekyllPush < Jekyll::Command
    class << self
        # Hook to exclude some files from indexing
        def custom_hook_excluded_file?(file)
            return false if file.path =~ %r{_usage/}
            true
        end
    end
end