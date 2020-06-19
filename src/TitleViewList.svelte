<script>
    import proj_settings from './env.js'
    export let title
    export let slug
</script>

<div class="titleview-item-wr">
    <div class="titleview-item">
        <a href="{proj_settings.url_prefix}{slug}">{title}</a>
    </div>
</div>