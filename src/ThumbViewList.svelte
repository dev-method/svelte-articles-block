<script>
    export let img_src
    export let title
    export let slug
</script>

<div class="thumbview-item-wr">
    <div class="thumbview-image-wr" style="background-image: url({img_src}); background-size: cover;">
    </div>
    <div class="thumbview-title-wr">
        <div class="thumbview-title">
            <a href="https://www.vekomet.ru/news/{slug}">{title}</a>
        </div>
    </div>
</div>