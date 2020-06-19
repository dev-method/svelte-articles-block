<script>
    import proj_settings from './env.js'
    export let img_src
    export let title
    export let pubdate
    export let slug
    export let title_body
</script>

<div class="fullview-item-wr">
    <div class="fullview-image-wr" style="background-image: url({img_src}); background-size: cover;">
        <div class="fullview-image-filter">
            <div class="fullview-image-date-wr">
                {pubdate}
            </div>
        </div>
    </div>
    <div class="fullview-content-title">
        <a href="{proj_settings.url_prefix}{slug}">{title}</a>
    </div>
    <div class="fullview-content-body equalheight">
        {@html title_body}
    </div>
    <div class="fullview-readmore-wr">
        <a href="{proj_settings.url_prefix}{slug}">Читать далее</a>
    </div>
</div>