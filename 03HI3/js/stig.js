const gameConfig = {
  characters: [
    { name: 'Aladdin', imgName: 'Aladdin_T_Icon', 
        spriteImages: ['Aladdin_B','Aladdin_M','Aladdin_T'], },
    
    { name: 'Alexandra', imgName: 'Alexandra_B_Icon', 
        spriteImages: ['Alexandra_B','Alexandra_M','Alexandra_T'], },
    
    { name: 'Allan Poe', imgName: 'Allan_Poe_B_Icon', spriteFolder: 'Allan', 
        spriteImages: ['Allan_Poe_B', 'Allan_Poe_M', 'Allan_Poe_T'], },
    
    { name: 'Ana Schariac', imgName: 'Ana_Schariac_T_Icon', spriteFolder: 'Ana', 
        spriteImages: ['Ana_Schariac_B', 'Ana_Schariac_M', 'Ana_Schariac_T'], },

    { name: 'Nikola Tesla', imgName: 'Anti-Entropy_XMas_T_Icon', spriteFolder: 'Tesla', 
        spriteImages: ['Nikola_Tesla_B', 'Nikola_Tesla_M', 'Nikola_Tesla_T',
                        'Tesla_Band_B', 'Tesla_Band_M', 'Tesla_Band_T', 'Anti-Entropy_XMas_T'], },

    { name: 'Aslaug', imgName: 'Aslaug_M_Icon',
        spriteImages: ['Aslaug_B', 'Aslaug_M', 'Aslaug_T'], },

    { name: 'Attila', imgName: 'Attila_T_Icon', 
        spriteImages: ['Attila_B', 'Attila_M', 'Attila_T'], },

    { name: 'Bastet', imgName: 'Bastet_M_Icon',  
        spriteImages: ['Bastet_B', 'Bastet_M', 'Bastet_T'], },
    
    { name: 'Beethoven', imgName: 'Beethoven_M_Icon', 
        spriteImages: ['Beethoven_B', 'Beethoven_M', 'Beethoven_T'], },
    
    { name: 'Benares', imgName: 'Benares_B_Icon',  
        spriteImages: ['Benares_Awakening_B', 'Benares_Awakening_M','Benares_Awakening_T','Benares_B'], },
    
    { name: 'Caravaggio', imgName: 'Caravaggio_M_Icon',  
        spriteImages: ['Caravaggio_B','Caravaggio_M','Caravaggio_T'], },

    { name: 'Carlo Collodi', imgName: 'Carlo_Collodi_T_Icon', spriteFolder: 'Carlo', 
        spriteImages: ['Carlo_Collodi_B','Carlo_Collodi_M','Carlo_Collodi_T'], },

    { name: 'Cecilia', imgName: 'Cecilia_Pale_Moon_T_Icon',
        spriteImages: ['Anniversary_Ball_T', 'Cecilia_Hawaii_T', 'Cecilia_Pale_Moon_T',
                       'Cecilia_Schariac_B', 'Cecilia_Schariac_M', 'Cecilia_Schariac_T',
                       'Cecilia_Youth_B','Cecilia_Youth_M','Cecilia_Youth_T'], },

    { name: 'Cezanne', imgName: 'Cezanne_B_Icon', 
        spriteImages: ['Cezanne_B', 'Cezanne_M','Cezanne_T'], },

    { name: 'Charlemagne', imgName: 'Charlemagne_M_Icon',
        spriteImages: ['Charlemagne_B', 'Charlemagne_M', 'Charlemagne_T'], },
    
    { name: 'Charlotte', imgName: 'Charlotte_T_Icon',  
        spriteImages: ['Charlotte_B','Charlotte_M','Charlotte_T'], },
    
    { name: 'Cleopatra', imgName: 'Cleopatra_T_Icon', 
        spriteImages: ['Cleopatra_B','Cleopatra_M','Cleopatra_T'], },
    
    { name: 'Cocolia', imgName: 'Cocolia_M_Icon', 
        spriteImages: ['Cocolia_B', 'Cocolia_M', 'Cocolia_T'], },

    { name: 'Columbus', imgName: 'Columbus_T_Icon',
        spriteImages: ['Columbus_B', 'Columbus_M','Columbus_T'], },

    { name: 'Dante', imgName: 'Dante_M_Icon',
        spriteImages: ['Dante_B','Dante_M','Dante_T'], },

    { name: 'Darwin', imgName: 'Darwin_T_Icon',
        spriteImages: ['Darwin_B', 'Darwin_M', 'Darwin_T'], },

    { name: 'Dickens', imgName: 'Dickens_T_Icon', 
        spriteImages: ['Dickens_B','Dickens_M','Dickens_T'], },
    
    { name: 'Dirac', imgName: 'Dirac_T_Icon',
        spriteImages: ['Dirac_B','Dirac_M','Dirac_T'], },
    
    { name: 'Dracula', imgName: 'Dracula_T_Icon',  
        spriteImages: ['Dracula_B','Dracula_M', 'Dracula_T'], },
    
    { name: 'Edison', imgName: 'Edison_T_Icon',  
        spriteImages: ['Edison_B', 'Edison_M', 'Edison_T', 'Edison_Thanksgiving_T'], },

    { name: 'Edwin Hubble', imgName: 'Edwin_Hubble_B_Icon', spriteFolder: 'Edwin', 
        spriteImages: ['Edwin_Hubble_B', 'Edwin_Hubble_M', 'Edwin_Hubble_T'], },

    { name: 'Einstein', imgName: 'Einstein_Band_T_Icon', 
        spriteImages: ['Anti-Entropy_XMas_M', 'Einstein_B', 'Einstein_M', 'Einstein_T',
                        'Einstein_Band_M', 'Einstein_Band_B', 'Einstein_Band_T'], },

    { name: 'Ekaterina', imgName: 'Ekaterina_B_Icon',  
        spriteImages: ['Ekaterina_B', 'Ekaterina_M', 'Ekaterina_T'], },

    { name: 'Elizabeth', imgName: 'Elizabeth_Bathory_T_Icon',
        spriteImages: ['Elizabeth_Bathory_B', 'Elizabeth_Bathory_M', 'Elizabeth_Bathory_T'], },
    
    { name: 'Faraday', imgName: 'Faraday_M_Icon', 
        spriteImages: ['Faraday_B', 'Faraday_M', 'Faraday_T'], },
    
    { name: 'Fuxi', imgName: 'Fuxi_T_Icon', 
        spriteImages: ['Fuxi_B', 'Fuxi_T', 'Fuxi_M'], },
    
    { name: 'Galileo', imgName: 'Galileo_B_Icon',
        spriteImages: ['Galileo_B', 'Galileo_M', 'Galileo_T'], },

    { name: 'Gustav Klimt', imgName: 'Gustav_Klimt_B_Icon', spriteFolder: 'Gustav', 
        spriteImages: ['Gustav_Klimt_B', 'Gustav_Klimt_M', 'Gustav_Klimt_T'], },

    { name: 'Handel', imgName: 'Handel_T_Icon', 
        spriteImages: ['Handel_B', 'Handel_M', 'Handel_T'], },

    { name: 'Hannah', imgName: 'Hannah_M_Icon', 
        spriteImages: ['Hannah_B', 'Hannah_M', 'Hannah_T'], },

    { name: 'Higokumaru', imgName: 'Higokumaru_M_Icon', 
        spriteImages: ['Anniversary_Ball_M', 'Higokumaru_B', 'Higokumaru_M','Higokumaru_T'], },
    
    { name: 'Holmes', imgName: 'Holmes_B_Icon', 
        spriteImages: ['Holmes_B', 'Holmes_M', 'Holmes_T'], },
    
    { name: 'Irene Adler', imgName: 'Irene_Adler_T_Icon', spriteFolder: 'Irene', 
        spriteImages: ['Irene_Adler_B','Irene_Adler_M','Irene_Adler_T'], },
    
    { name: 'Isaac Newton', imgName: 'Isaac_Newton_M_Icon', spriteFolder: 'Isaac', 
        spriteImages: ['Isaac_Newton_B','Isaac_Newton_M','Isaac_Newton_T'], },

    { name: 'Ishikawa', imgName: 'Ishikawa_Goemon_B_Icon', 
        spriteImages: ['Ishikawa_Goemon_B', 'Ishikawa_Goemon_M', 'Ishikawa_Goemon_T'], },

    { name: 'Iskandar', imgName: 'Iskandar_M_Icon',
        spriteImages: ['Iskandar_B', 'Iskandar_M', 'Iskandar_T'], },

    { name: 'Jin Shengtan', imgName: 'Jin_Shengtan_T_Icon', spriteFolder: 'JinShengtan', 
        spriteImages: ['Jin_Shengtan_B','Jin_Shengtan_M','Jin_Shengtan_T'], },

    { name: 'Jixuanyuan', imgName: 'Jixuanyuan_Aqua_M_Icon',
        spriteImages: ['Jixuanyuan_Aqua_M','Jixuanyuan_Aqua_B', 'Jixuanyuan_Aqua_T',
                        'Dark_Jixuanyuan_B', 'Dark_Jixuanyuan_M','Dark_Jixuanyuan_T',
                        'Jixuanyuan_B', 'Jixuanyuan_T','Jixuanyuan_M'], },
    
    { name: 'Kafka', imgName: 'Kafka_B_Icon', 
        spriteImages: ['Kafka_B','Kafka_M','Kafka_T'], },
    
    { name: 'Kepler', imgName: 'Kepler_M_Icon', 
        spriteImages: ['Kepler_B','Kepler_M','Kepler_T'], },
    
    { name: 'Kitten', imgName: 'Kitten_Fun_M_Icon', spriteFolder: 'KittenFun', 
        spriteImages: ['Kitten_Fun_M'], },

    { name: 'Leeuwenhoek', imgName: 'Leeuwenhoek_M_Icon', 
        spriteImages: ['Leeuwenhoek_B','Leeuwenhoek_M','Leeuwenhoek_T'], },

    { name: 'Liebig', imgName: 'Liebig_T_Icon', 
        spriteImages: ['Liebig_B','Liebig_T','Liebig_M'], },

    { name: 'Lier', imgName: 'Lier_B_Icon', 
        spriteImages: ['Lier_B','Lier_M','Lier_T',
                        'Lier_Scarlet_B','Lier_Scarlet_T','Lier_Scarlet_M'], },

    { name: 'Linnaeus', imgName: 'Linnaeus_M_Icon',
        spriteImages: ['Linnaeus_B','Linnaeus_M','Linnaeus_T'], },
    
    { name: 'Lucia', imgName: 'Lucia_B_Icon',
        spriteImages: ['Lucia_B','Lucia_T','Lucia_M'], },
    
    { name: 'Marco Polo', imgName: 'Marco_Polo_T_Icon', spriteFolder: 'MarcoPolo', 
        spriteImages: ['Marco_Polo_B','Marco_Polo_M','Marco_Polo_T'], },
    
    { name: 'Mary Shelley', imgName: 'Mary_Shelley_T_Icon', spriteFolder: 'Mary', 
        spriteImages: ['Mary_Shelley_B','Mary_Shelley_M','Mary_Shelley_T'], },

    { name: 'Mendeleev', imgName: 'Mendeleev_M_Icon',  
        spriteImages: ['Mendeleev_B','Mendeleev_T','Mendeleev_M'], },

    { name: 'Michelangelo', imgName: 'Michelangelo_T_Icon', 
        spriteImages: ['Michelangelo_B','Michelangelo_M','Michelangelo_T','Michelangelo_Formals_M'], },

    { name: 'Miyohime', imgName: 'Miyohime_Performance_M_Icon', 
        spriteImages: ['Miyohime_Performance_M'], },

    { name: 'Monet', imgName: 'Monet_M_Icon', 
        spriteImages: ['Monet_B','Monet_M','Monet_T'], },
    
    { name: 'Nagamitsu', imgName: 'Nagamitsu_T_Icon', 
        spriteImages: ['Nagamitsu_B','Nagamitsu_M','Nagamitsu_T'], },
    
    { name: 'Ningyo', imgName: 'Ningyo_T_Icon',
        spriteImages: ['Ningyo_T'], },
    
    { name: 'Nobel', imgName: 'Nobel_B_Icon', 
        spriteImages: ['Nobel_B','Nobel_M','Nobel_T'], },

    { name: 'Nohime', imgName: 'Nohime_M_Icon', 
        spriteImages: ['Nohime_B','Nohime_T','Nohime_M'], },

    { name: 'Nuwa', imgName: 'Nuwa_M_Icon', 
        spriteImages: ['Nuwa_B','Nuwa_M','Nuwa_T',
                        'Nuwa_Figurine_Master_B','Nuwa_Figurine_Master_M','Nuwa_Figurine_Master_T'], },

    { name: 'Octavia', imgName: 'Octavia_B_Icon', 
        spriteImages: ['Octavia_B','Octavia_M','Octavia_T'], },

    { name: 'Ogier', imgName: 'Ogier_M_Icon', 
        spriteImages: ['Ogier_B','Ogier_M','Ogier_T'], },
    
    { name: 'Otto', imgName: 'Otto_Apocalypse_T_Icon', 
        spriteImages: ['Otto_Apocalypse_B','Otto_Apocalypse_M','Otto_Apocalypse_T',
                        '2nd_Eruption_B','Otto_Womens_Attire_B'], },
    
    { name: 'Traveler', imgName: 'Outworld_Traveler_T_Icon', 
        spriteImages: ['Outworld_Traveler_T'], },
    
    { name: 'Paganini', imgName: 'Paganini_M_Icon',  
        spriteImages: ['Paganini_B', 'Paganini_M','Paganini_T'], },

    { name: 'Pericles', imgName: 'Pericles_M_Icon', 
        spriteImages: ['Pericles_B','Pericles_M','Pericles_T'], },

    { name: 'Picasso', imgName: 'Picasso_T_Icon', 
        spriteImages: ['Picasso_B','Picasso_M','Picasso_T'], },

    { name: 'Planck', imgName: 'Planck_B_Icon', 
        spriteImages: ['Planck_B','Planck_M','Planck_T','Anti-Entropy_XMas_B'], },

    { name: 'Ragna', imgName: 'Ragna_M_Icon', 
        spriteImages: ['Ragna_B','Ragna_M','Ragna_T'], },
    
    { name: 'Rasputin', imgName: 'Rasputin_T_Icon',
        spriteImages: ['Rasputin_B','Rasputin_M','Rasputin_T'], },
    
    { name: 'Rinaldo', imgName: 'Rinaldo_T_Icon', 
        spriteImages: ['Rinaldo_B','Rinaldo_T','Rinaldo_M'], },
    
    { name: 'Roald', imgName: 'Roald_Amundsen_T_Icon',
        spriteImages: ['Roald_Amundsen_B','Roald_Amundsen_M','Roald_Amundsen_T'], },

    { name: 'Robert Peary', imgName: 'Robert_Peary_T_Icon', spriteFolder: 'Robert', 
        spriteImages: ['Robert_Peary_B','Robert_Peary_M','Robert_Peary_T'], },

    { name: 'Rowland', imgName: 'Rowland_B_Icon', 
        spriteImages: ['Rowland_B','Rowland_M','Rowland_T'], },

    { name: 'Ryunosuke', imgName: 'Ryunosuke_Akutagawa_M_Icon',
        spriteImages: ['Ryunosuke_Akutagawa_B', 'Ryunosuke_Akutagawa_M','Ryunosuke_Akutagawa_T'], },

    { name: 'Sakamoto', imgName: 'Sakamoto_Ryoma_B_Icon',
        spriteImages: ['Sakamoto_Ryoma_B','Sakamoto_Ryoma_T','Sakamoto_Ryoma_M'], },

    { name: 'Sanada', imgName: 'Sanada_Yukimura_B_Icon', 
        spriteImages: ['Sanada_Yukimura_B','Sanada_Yukimura_M','Sanada_Yukimura_T'], },

    { name: 'Schrodinger', imgName: 'Schrodinger_Band_M_Icon',
        spriteImages: ['Schrodinger_B', 'Schrodinger_M','Schrodinger_T',
                        'Schrodinger_Band_B','Schrodinger_Band_M','Schrodinger_Band_T',
                        'Schrodinger_Tour_B','Schrodinger_Tour_M','Schrodinger_Tour_T'], },

    { name: 'Scott', imgName: 'Scott_M_Icon', 
        spriteImages: ['Scott_B','Scott_M','Scott_T'], },

    { name: 'Selena', imgName: 'Selena_B_Icon',  
        spriteImages: ['Selena_B','Selena_M','Selena_T'], },

    { name: 'Shakespeare', imgName: 'Shakespeare_Halloween_B_Icon', 
        spriteImages: ['Shakespeare_Adrift_B','Shakespeare_Adrift_M','Shakespeare_Adrift_T',
                    'Shakespeare_B','Shakespeare_M','Shakespeare_T','Shakespeare_Halloween_B'], },

    { name: 'Shennong', imgName: 'Shennong_T_Icon', 
        spriteImages: ['Shennong_B','Shennong_M','Shennong_T'], },

    { name: 'Shuijing', imgName: 'Shuijing_T_Icon', 
        spriteImages: ['Shuijing_B','Shuijing_M','Shuijing_T'], },

    { name: 'Siegfried', imgName: 'Siegfried_Kaslana_T_Icon',
        spriteImages: ['Siegfried_Kaslana_B','Siegfried_Kaslana_M','Siegfried_Kaslana_T'], },

    { name: 'Sin Mal', imgName: 'Sin_Mal_M_Icon', spriteFolder: 'SinMal', 
        spriteImages: ['Sin_Mal_B','Sin_Mal_M','Sin_Mal_T'], },

    { name: 'Solon', imgName: 'Solon_M_Icon', 
        spriteImages: ['Solon_B','Solon_M','Solon_T'], },
    
    { name: 'Litost', imgName: 'Splendors_of_Amber_B_Icon', spriteFolder: 'Litost', 
        spriteImages: ['Splendors_of_Amber_B'], },

    { name: 'Tchaikovsky', imgName: 'Tchaikovsky_B_Icon',
        spriteImages: ['Tchaikovsky_B','Tchaikovsky_M','Tchaikovsky_T'], },

    { name: 'Thales', imgName: 'Thales_T_Icon', 
        spriteImages: ['Thales_B','Thales_M','Thales_T'], },

    { name: 'Tsiolkovsky', imgName: 'Tsiolkovsky_T_Icon', 
        spriteImages: ['Tsiolkovsky_B','Tsiolkovsky_M','Tsiolkovsky_T'], },

    { name: 'Turgenev', imgName: 'Turgenev_T_Icon', 
        spriteImages: ['Turgenev_B','Turgenev_M','Turgenev_T'], },

    { name: 'Van Gogh', imgName: 'Van_Gogh_T_Icon', spriteFolder: 'VanGogh', 
        spriteImages: ['Van_Gogh_B','Van_Gogh_M','Van_Gogh_T'], },

    { name: 'Verne', imgName: 'Verne_M_Icon', 
        spriteImages: ['Verne_B','Verne_M','Verne_T'], },

    { name: 'Victoria', imgName: 'Victoria_M_Icon', 
        spriteImages: ['Victoria_B','Victoria_M','Victoria_T'], },

    { name: 'Viola', imgName: 'Viola_M_Icon', 
        spriteImages: ['Viola_B','Viola_M','Viola_T'], },

    { name: 'Von Neumann', imgName: 'Von_Neumann_T_Icon', spriteFolder: 'VonNeumann', 
        spriteImages: ['Von_Neumann_B','Von_Neumann_M','Von_Neumann_T'], },

    { name: 'Wang Zhaojun', imgName: 'Wang_Zhaojun_M_Icon', spriteFolder: 'WangZhaojun', 
        spriteImages: ['Wang_Zhaojun_B','Wang_Zhaojun_M','Wang_Zhaojun_T'], },

    { name: 'Wang Zhenyi', imgName: 'Wang_Zhenyi_T_Icon', spriteFolder: 'WangZhenyi', 
        spriteImages: ['Wang_Zhenyi_B','Wang_Zhenyi_M','Wang_Zhenyi_T'], },

    { name: 'Welt Yang', imgName: 'Welt_Yang_B_Icon', spriteFolder: 'Welt', 
        spriteImages: ['Welt_Yang_B','Welt_Yang_M','Welt_Yang_T','2nd_Eruption_M'], },

    { name: 'Wendy', imgName: 'Wendy_Envy_M_Icon',  
        spriteImages: ['Wendy_Envy_M'], },

    { name: 'Wilde', imgName: 'Wilde_B_Icon', 
        spriteImages: ['Wilde_B','Wilde_M','Wilde_T'], },

    { name: 'Willows', imgName: 'Willows_M_Icon',  
        spriteImages: ['Willows_B','Willows_M','Willows_T'], },

    { name: 'Yodo Dono', imgName: 'Yodo_Dono_T_Icon', spriteFolder: 'YodoDono', 
        spriteImages: ['Yodo_Dono_B','Yodo_Dono_M','Yodo_Dono_T'], },

    { name: 'Zeno', imgName: 'Zeno_B_Icon', 
        spriteImages: ['Zeno_B','Zeno_M','Zeno_T'], },

    { name: 'Zhangheng', imgName: 'Zhangheng_T_Icon', 
        spriteImages: ['Zhangheng_B','Zhangheng_M','Zhangheng_T'], },

    { name: 'Zorro', imgName: 'Zorro_T_Icon', 
        spriteImages: ['Zorro_B','Zorro_M','Zorro_T'], },

    { name: 'Avogadro', imgName: 'Avogadro_M_Icon', 
        spriteImages: ['Avogadro_B', 'Avogadro_M', 'Avogadro_T'], },

    { name: 'Aristophanes', imgName: 'Aristophanes_T_Icon', 
        spriteImages: ['Aristophanes_B', 'Aristophanes_M', 'Aristophanes_T'], },

    { name: '', imgName: '', spriteFolder: '', 
        spriteImages: [''], },

    { name: '', imgName: '', spriteFolder: '', 
        spriteImages: [''], },

    { name: '', imgName: '', spriteFolder: '', 
        spriteImages: [''], },
    // Add more characters here
  ],

  pathPrefix: "../assets/charaid/Honkai/Stigmata/",
  spritePrefix: "../assets/Sprite/HI3/Stigmata/",

  getImgPath: (char) => {
    const imgName = char.imgName || char.name.replace(/\s+/g, ''); // fallback to name with no spaces
    return `${gameConfig.pathPrefix}${imgName}.webp`;
  },

  getSpritePath: (char) => {
    const folder = char.spriteFolder || char.name.replace(/\s+/g, '');
    const images = char.spriteImages || [];
    return images.map(img => `${gameConfig.spritePrefix}${folder}/${img}.webp`);
 }
};
