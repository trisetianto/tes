SELECT lahan.lahan_id, lahan.lahan_nama
FROM lahan
JOIN biologis
ON lahan.biologis_id = biologis.biologis_id
JOIN produktivitas
ON lahan.produktivitas_id = produktivitas.produktivitas_id
JOIN administrasi
ON lahan.administrasi_id = administrasi.administrasi_id
JOIN zona_penyangga
ON lahan.zona_penyangga_id = zona_penyangga.zona_penyanga_id;


SELECT l.lahan_id, l.lahan_nama, l.luas, l.curah_hujan, l.kedalaman_air_tanah, l.permeabilitas, l.kepadatan_penduduk, b.biologis_ket, p.produktivitas_ket, a.administrasi_ket, z.zona_penyanga_ket
FROM lahan l
JOIN biologis b ON l.biologis_id = b.biologis_id
JOIN produktivitas p ON l.produktivitas_id = p.produktivitas_id
JOIN administrasi a ON l.administrasi_id = a.administrasi_id
JOIN zona_penyangga z ON l.zona_penyangga_id = z.zona_penyanga_id;
