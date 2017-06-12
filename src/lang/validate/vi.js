export default{
    after: (field, [target]) => `$ {
        field
    }
    phải xuất hiện sau $ {
        target
    }.`,
    alpha_dash: (field) => `$ {
        field
    }
    cóthểchứa các kítựchữ,
    số,
    gạch ngang vàgạch dưới.`,
    alpha_num: (field) => `$ {
        field
    }
    chỉcóthểchứa các kítựchữvàsố.`,
    alpha: (field) => `$ {
        field
    }
    chỉcóthểchứa các kítựchữ.`,
    before: (field, [target]) => `$ {
        field
    }
    phải xuất hiện trước $ {
        target
    }.`,
    between: (field, [min, max]) => `$ {
        field
    }
    phải cógiátrịnằm trong khoảng giữa $ {
        min
    }
    và$ {
        max
    }.`,
    confirmed: (field, [confirmedField]) => `$ {
        field
    }
    khác với $ {
        confirmedField
    }.`,
    date_between: (field, [min, max]) => `$ {
      field
    }
    phải cógiátrịnằm trong khoảng giữa $ {
      min
    }
    và$ {
      max
    }.`,
    date_format: (field, [format]) => `$ {
      field
    }
    phải cógiátrịdướiđịnh dạng $ {
      format
    }.`,
    decimal: (field, [decimals] = ['*']) => `$ {
      field
    }
    chỉcóthểchứa các kítựsốvàdấu thập phân $ {
      decimals === '*' ? '': decimals
    }.`,
    digits: (field, [length]) => `Trường $ {
      field
    }
    chỉcóthểchứa các kítựsốvàbắt buộc phải cóđộdài là$ {
      length
    }.`,
    dimensions: (field, [width, height]) => `$ {
      field
    }
    phải cóchiều rộng $ {
      width
    }
    pixels vàchiều cao $ {
      height
    }
    pixels.`,
    email: (field) => `$ {
      field
    }
    phải làmộtđịa chỉemail hợp lệ.`,
    ext: (field) => `$ {
      field
    }
    phải làmột tệp.`,
    image: (field) => `Trường $ {
      field
    }
    phải làmộtảnh.`,
    in: (field) => `$ {
      field
    }
    phải làmột giátrị.`,
    ip: (field) => `$ {
      field
    }
    phải làmộtđịa chỉip hợp lệ.`,
    max: (field, [length]) => `$ {
      field
    }
    không thểcónhiều hơn $ {
      length
    }
    kítự.`,
    mimes: (field) => `$ {
      field
    }
    phải chứa kiểu tệp phùhợp.`,
    min: (field, [length]) => `$ {
      field
    }
    phải chứaít nhất $ {
      length
    }
    kítự.`,
    not_in: (field) => `$ {
      field
    }
    phải chứa một giátrịhợp lệ.`,
    numeric: (field) => `$ {
      field
    }
    chỉcóthểcócác kítựsố.`,
    regex: (field) => `$ {
      field
    }
    cóđịnh dạng khôngđúng.`,
    required: (field) => `$ {
      field
    }
    làbắt buộc.`,
    size: (field, [size]) => `$ {
      field
    }
    chỉcóthểchứa tệp nhỏhơn $ {
      size
    }
    KB.`,
    url: (field) => `$ {
      field
    }
    không phải làmộtđịa chỉURL hợp lệ.`
}
