<script>
    export let img_src
    export let title
    export let body
    export let pubdate
    export let slug
</script>

<div class="fullview-item-wr">
    <a href="https://www.vekomet.ru/news/{slug}"><div class="fullview-image-wr" style="background-image: url({img_src}); background-size: cover;">
        <div class="fullview-image-title-wr">
            {pubdate}
        </div>
    </div>
    </a>
    <div class="fullview-item-content">
        <div class="fullview-content-title">
            {title}
        </div>
        <div class="fullview-content-body">
            {@html body}
        </div>
        <div class="fullview-readmore-wr">
            Читать далее
        </div>
    </div>
</div>