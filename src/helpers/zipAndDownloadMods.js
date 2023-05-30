import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import FileSaver from "file-saver";

const generateRandomString = (length = 6) =>
    Math.random().toString(20).substring(2, length);

export const zipAndDownloadMods = (mods, downloadProgress) =>
    new Promise((resolve) => {
        const zip = new JSZip();

        let count = 0;

        mods.forEach(async (mod, index) => {
            const fileName = `${mod.type}/${mod.filePaths.mod.split("/")[3]}`;
            const fileData = await JSZipUtils.getBinaryContent(
                mod.filePaths.mod
            );

            zip.file(fileName, fileData, { binary: true });

            count++;

            if (count === mods.length) {
                zip.generateAsync({ type: "blob" }, (metadata) => {
                    downloadProgress.set(metadata.percent);
                }).then(function (content) {
                    downloadProgress.set(0);
                    FileSaver.saveAs(
                        content,
                        `MyMods-${generateRandomString(10)}`
                    );
                    resolve();
                });
            }
        });
    });
