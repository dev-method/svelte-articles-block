<script>
    export let img_src
    export let title
    export let body
    export let pubdate
    export let slug
</script>

<div class="fullview-item-wr">
    <div class="fullview-image-wr" style="background-image: url({img_src}); background-size: cover;">
        <div class="fullview-image-filter">
            <div class="fullview-content-title">
                <a href="https://www.vekomet.ru/news/{slug}">{title}</a>
            </div>
            <div class="fullview-image-date-wr">
                {pubdate}
            </div>
        </div>
    </div>
    <div class="fullview-content-body equalheight">
        {@html body}
    </div>
    <div class="fullview-readmore-wr">
        <a href="https://www.vekomet.ru/news/{slug}">Читать далее</a>
    </div>
</div>