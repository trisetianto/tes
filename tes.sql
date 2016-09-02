SELECT l.lahan.id
FROM lahan l
JOIN biologis
ON lahan.biologis_id = biologis.biologis_id
JOIN produktivitas
ON lahan.produktivitas_id = produktivitas.produktivitas_id
JOIN administrasi
ON lahan.administrasi_id = administrasi.administrasi_id
JOIN zona_penyangga
ON lahan.zona_penyangga_id = zona_penyangga.zona_penyanga_id;
