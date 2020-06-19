<script>
    import proj_settings from './env.js'
    export let img_src
    export let title
    export let slug
</script>

<div class="thumbview-item-wr">
    <div class="thumbview-image-wr" style="background-image: url({img_src}); background-size: cover;">
    </div>
    <div class="thumbview-title-wr">
        <div class="thumbview-title">
            <a href="{proj_settings.url_prefix}{slug}">{title}</a>
        </div>
    </div>
</div>